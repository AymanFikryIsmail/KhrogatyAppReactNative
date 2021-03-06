/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, TouchableHighlight, TextInput, ImageBackground, View, StatusBar, AsyncStorage } from 'react-native';
import { Container, Header, Spinner, Content, Card, CardItem, Button, Left, Right, Body, Icon, Text } from 'native-base';

import MyHeader from './MyHeader'


type Props = {};
export default class SearchScreen extends Component<Props> {
  state = { title: this.props.title, name: "search", isLoading: true, dataSource: [] }
  static navigationOptions = {
    title: 'Search',
    header: null
  };
  render() {
    return (
      <Container >
        <MyHeader title="Search" home="1" />

        <View style={{
          flexDirection: 'row',
          borderColor: '#CCCCCC',
          borderRadius: 6,
          borderWidth: 1,
          margin: 15
        }}>
          <TouchableHighlight style={{
            paddingLeft: 20,
            paddingRight: 20, alignItems: 'center', justifyContent: 'center'
          }} onPress={() => { this.searchForPlace() }} underlayColor='transparent'>
            <View>
              <Icon name="ios-search" size={20} color="#000" />
            </View>
          </TouchableHighlight>
          <TextInput
            style={{
              height: 40,
              fontSize: 20,
              paddingLeft: 20,
              paddingRight: 20,
            }}
            onChangeText={(name) => this.setState({ name })}
            placeholder='search'
            value={this.state.name}
            keyboardType='web-search'
            onSubmitEditing={() => { this.searchForPlace() }}
            ref='searchBar'
          />



        </View>
        <Content style={{marginHorizontal:2 ,}}>

        {this.returnData()}
</Content>

      </Container>
    );
  }
  searchForPlace() {
    return fetch('http://reactnative.website/iti/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function () {
          console.log(responseJson);
        });

      })
      .catch((error) => {
        this.setState({
          isLoading: true,
        })
        console.error(error);
      });
  }


  returnData() {

    let place = this.state.name;
    if (this.state.isLoading) {
      return (
        <View style={{
          width: '100%', height: '100%',
          flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
        }}>
          <Image source={require('../images/VectorIcons/nosearch-icon.png')} style={{
            width: 120, height: 120,
            justifyContent: 'center', alignItems: 'center'
          }} />
          <Text style={{
            color: "#444",
            marginTop: 15,
            fontWeight: 'bold', textAlign: 'center', fontSize: 15,
            justifyContent: 'center', alignItems: 'center'
          }}>Search for any places</Text>
        </View>
      )
    } else {
      return (
        this.state.dataSource.filter(function (data) {
          return data.acf.address.includes(place);
        }).map((mapData) => {
          return (
            <Card key={mapData.id} style={{  borderRadius:10 }} >
            <CardItem button
                onPress={() => {

                  this.props.navigation.navigate('TopDetailscreen', {
                    title: mapData.title.rendered,
                    content: mapData.content.rendered,
                    image: mapData.better_featured_image.source_url,
                    id: mapData.id,
                    address: mapData.acf.address,
                    phone_number: mapData.acf.phone_number,
                    email_address: mapData.acf.email_address,
                    map_location:mapData.acf.map_location

                  });
                }}
                style={{ borderRadius:10 }}
              >
                <Left style={{ flex: 1 }}>
                  <Image source={{ uri: mapData.better_featured_image.source_url }} style={{ height: 120, flex: 1, borderRadius: 10 }} />
                </Left>
                <Body style={{ flex: 3, marginLeft: 10 }}>
                  <Text style={{ fontSize: 10, color: "#000" }}>{mapData.title.rendered}</Text>
                  <Text style={{
                    color: "green",
                    padding: 5,
                    fontSize: 10,
                  }}>
                    <Image source={require('../images/Icons/map-marker.png')} style={{
                      width: 15, height: 15,
                    }} />  {mapData.acf.address}</Text>


                  <Text style={{ fontSize: 10, color: "#999", margin: 10 }}>{mapData.excerpt.rendered}</Text>

                  <Button onPress={() => this.props.navigation.navigate('TopDetailscreen', {
                    title: mapData.title.rendered,
                    content: mapData.content.rendered,
                    image: mapData.better_featured_image.source_url,
                    id: mapData.id,
                    address: mapData.acf.address,
                    phone_number: mapData.acf.phone_number,
                    email_address: mapData.acf.email_address,
                    map_location:mapData.acf.map_location

                  })} style={{
                    backgroundColor: "green",
                    height: 25,
                    textAlign: 'center',
                    paddingEnd: 10,
                    paddingStart: 10,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#fff'
                  }}>
                    <Text style={{
                      color: "#fff",
                      fontSize: 10,
                      justifyContent: 'center', alignItems: 'center',
                      textAlign: 'center'
                    }} >  details  </Text>
                  </Button>


                </Body>
              </CardItem>
            </Card>
          )
        })
      )
    }
  }




  moveToHome() {
    AsyncStorage.getItem("firstlunch").then((firstlunch) => {
      setTimeout(() => {
        if (firstlunch === "yes") {
          this.props.navigation.navigate('OnBoardingScreen');
        } else {
          this.props.navigation.navigate('Home');
        }
      }, 1000)
    })

  }
}
