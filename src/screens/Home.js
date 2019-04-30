/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, ImageBackground, ScrollView, StatusBar, AsyncStorage } from 'react-native';
import { Container, Text, Spinner, Content, Body, Card, CardItem, Button, Left, View } from 'native-base';


type Props = {};
export default class Home extends Component<Props> {
  state = { title: this.props.title, isLoading: true, dataSource: [] }

  static navigationOptions = {
    title: 'Home',
    header: null
  };
  componentDidMount() {
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
        console.error(error);
      });

  }
  render() {
    return (
      <Container >
        <StatusBar visible />
        <Content>

          <ImageBackground source={require('../images/Backgrounds/home-header.png')} style={{
            width: '100%', height: 150,
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
          }}>
            <Image source={require('../images/Logo/khrogaty-logo.png')} style={{
              width: 100, height: 100,
              justifyContent: 'center', alignItems: 'center'
            }} />
          </ImageBackground>
          <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>
            <Text style={{
              color: "#444", marginHorizontal: 10, padding: 10, fontWeight: 'bold', fontSize: 12,
            }}>
              <Image source={require('../images/VectorIcons/home-first-icon.png')} style={{
                width: 30, height: 30, marginHorizontal: 100,
              }} />   Places For Going Out</Text>

            <Text style={{ color: "green", marginHorizontal: 10, marginTop: 25, textAlign: 'right', flex: 1, fontSize: 14, }}
              onPress={() => {
                this.props.navigation.navigate('FindPlacesScreen')
              }}
            >
              View More</Text>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <ScrollView
              horizontal={true}
            >
              {this.returnData(4)}
            </ScrollView>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>

            <Text style={{
              color: "#444",
              marginHorizontal: 10,
              padding: 10,
              fontWeight: 'bold', fontSize: 12,
            }}>
              <Image source={require('../images/VectorIcons/home-second-icon.png')} style={{
                width: 30, height: 30,
                marginHorizontal: 100,

              }} />  Restaurants && Cofee Shops</Text>
            <Text style={{ color: "green", marginHorizontal: 10, marginTop: 25, textAlign: 'right', flex: 1, fontSize: 14, }}
              onPress={() => {
                this.props.navigation.navigate('RestaurantScreen')
              }}
            >
              View More</Text>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <ScrollView
              horizontal={true}
            >
              {this.returnData(3)}
            </ScrollView>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', marginBottom: 10 }}>

            <Text style={{
              color: "#444",
              marginHorizontal: 10,
              padding: 10,
              fontWeight: 'bold', fontSize: 12,
            }}>
              <Image source={require('../images/VectorIcons/home-third-icon.png')} style={{
                width: 30, height: 30,
                marginHorizontal: 100,

              }} />   What Do I Do ?</Text>
            <Text style={{ color: "green", marginHorizontal: 10, marginTop: 25, textAlign: 'right', flex: 1, fontSize: 14, }}
              onPress={() => {
                this.props.navigation.navigate('ThingsToDoScreen')
              }}
            >
              View More</Text>
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <ScrollView
              horizontal={true}
            >
              {this.returnData(2)}
            </ScrollView>
          </View>
        </Content>

      </Container>
    );
  }

  returnData(cat) {
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
        this.state.dataSource.filter(function (data) {
          return data.categories == cat;
        }).map((mapData) => {
          const _navTitle =mapData.title.rendered;
          const regexTitle = /(&#038;)/ig;
          const navTitle = _navTitle.replace(regexTitle, '&');
          return (

            <View >
              <Card key={mapData.id} style={{
                marginHorizontal: 10, flex: 0, borderRadius: 10
                , shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.8,
                shadowRadius: 2,
                elevation: 5,
              }}>
                <CardItem cardBody button
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
                  style={{
                     borderRadius: 10
                                     }}>
                  <Image source={{ uri: mapData.better_featured_image.source_url }}
                    style={{
                      borderRadius: 10, height: 140, width: 130
                    }} />
                </CardItem>
              </Card>
              <Text style={{ fontSize: 14,  width: 130,paddingStart: 5, color: "#000" }}>{ navTitle}</Text>
              <Text style={{
                width: 130,
                color: "#999",
                paddingStart: 5,
                fontSize: 8,
              }}>
                <Image source={require('../images/Icons/map-marker.png')} style={{
                  width: 15, height: 15,
                }} />   {mapData.acf.address}</Text>
            </View>

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
