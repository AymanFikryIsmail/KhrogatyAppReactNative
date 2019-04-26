/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ImageBackground, Image, StatusBar, View, AsyncStorage } from 'react-native';
import { Container, Text, Button } from 'native-base';


type Props = {};
export default class OnBoardingScreenOne extends Component<Props> {
  state = { title: this.props.title, current: "1" }
  componentDidMount() {
    // Hide the status bar
    StatusBar.setHidden(true);
  }
  static navigationOptions = {
    title: 'single news',
    header: null
  };
  render() {

    return (

      <Container style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

       
<ImageBackground source={require('../images/Backgrounds/onboarding-bg-left.png')} style={{
          width: '100%', height: '100%', justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image source={require('../images/Logo/khrogaty-logo.png')} style={{
            width: 110, height: 110,
            marginTop: 150,
            justifyContent: 'center', alignItems: 'center'
          }} />
          <Image source={require('../images/VectorIcons/home-first-icon.png')} style={{
            width: 45, height: 45,
            marginTop: 150,
            justifyContent: 'center', alignItems: 'center'
          }} />
          <Text style={{
            color: "#444",
            marginTop: 15,
            fontWeight: 'bold', textAlign: 'center', fontSize: 15,
            justifyContent: 'center', alignItems: 'center'
          }}>Places For Going Out</Text>
          <Text style={{
            width: "80%",
            color: "#888",
            textAlign: 'center', fontSize: 12,
            justifyContent: 'center', alignItems: 'center'
          }}>Lorem Ipsum is simply dummy text of the printing and  industry been</Text>

          <Button transparent onPress={() => this.props.navigation.navigate('OnBoardingScreenTwo')} style={{ alignSelf: 'flex-end'
           ,marginBottom :15}}>
            <Text style={{
              color: "#333",
              fontSize: 12,
              
            }} >  Next  ></Text>
          </Button>
        </ImageBackground>
    
    
      </Container>
    );
  }
 
}
