/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, ImageBackground, StatusBar, AsyncStorage } from 'react-native';
import { Container, Header, Spinner, Content, Card, CardItem, Button, Left, Right, Body, Icon, Text, View } from 'native-base';
import MyHeader from './MyHeader'

type Props = {};
export default class RestaurantScreen extends Component<Props> {
  state = { title: this.props.title, isLoading: true, dataSource: [] }
  static navigationOptions = {
    title: 'Rest && Coffe Shops',
    header: null
  };

  componentDidMount() {
    return fetch('http://reactnative.website/iti/wp-json/wp/v2/posts?categories=3')
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
        console.error(error);
      });

  }
  render() {
    return (
      <Container >
        <Content style={{marginHorizontal:2 ,}}>
          {this.returnData()}
        </Content>
      </Container>
    );

  }


  returnData() {
    if (this.state.isLoading) {
      return (<View style={{
        flex: 1,
        flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
      }}>
        <Spinner color="red" style={{ color: "#f00", fontSize: 25, justifyContent: 'center', alignItems: 'center' }} />
        <Text style={{ color: "#f00", fontSize: 25, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>Loading </Text>
      </View>
      )
    } else {
      return (
        this.state.dataSource.map((mapData) => {
          return (

            <Card key={mapData.id} style={{   borderRadius: 10 }} >
              <CardItem button
                onPress={() => {
             
                  this.props.navigation.navigate('TopDetailscreen', {
                    title: mapData.title.rendered,
                    content: mapData.content.rendered,
                    image: mapData.better_featured_image.source_url,
                    id: mapData.id,
                    address: mapData.acf.address,
                    phone_number: mapData.acf.phone_number,
                    email_address: mapData.acf.email_address
                  }); 
                }}
                style={{ borderRadius: 10 }}
              >
                <Left style={{ flex: 1 }}>
                  <Image source={{ uri: mapData.better_featured_image.source_url }} style={{ height: 120, flex: 1, borderRadius: 10 }} />
                </Left>
                <Body style={{ flex: 3, marginLeft: 10 }}>
                  <Text style={{ fontSize: 10, color: "#000" }}>{mapData.title.rendered}</Text>
                  <Text style={{
                    color: "#444",
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
                    email_address: mapData.acf.email_address
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
}
