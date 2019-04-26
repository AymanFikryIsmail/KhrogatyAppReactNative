/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, ImageBackground, View, StatusBar, AsyncStorage } from 'react-native';
import { Container, Text, Spinner } from 'native-base';
import MyHeader from './MyHeader'


type Props = {};
export default class SearchScreen extends Component<Props> {
  state = { title: this.props.title }

  static navigationOptions = {
    title: 'Search',
    header: null
  };
  render() {
    return (
      <Container >
        <MyHeader title="Search" home="2" />

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
      </Container>
    );
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
