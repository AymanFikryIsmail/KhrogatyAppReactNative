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
export default class OnBoardingScreenTwo extends Component<Props> {
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

      <Container style={{  flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
<ImageBackground source={require('../images/Backgrounds/onboarding-bg-right.png')} style={{
          width: '100%', height: '100%', justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image source={require('../images/Logo/khrogaty-logo.png')} style={{
            width: 110, height: 110,
            marginTop: 150,
            justifyContent: 'center', alignItems: 'center'
          }} />
          <Image source={require('../images/VectorIcons/onboard-secondicon.png')} style={{
            width: 45, height: 45,
            marginTop: 100,
            justifyContent: 'center', alignItems: 'center'
          }} />
          <Text style={{
            color: "#444",
            marginTop: 15,
            fontWeight: 'bold', textAlign: 'center', fontSize: 12,
            justifyContent: 'center', alignItems: 'center'
          }}>Restaurants && Cofee Shops</Text>
          <Text style={{
            width: "80%",
            color: "#888",
            textAlign: 'center', fontSize: 12,
            justifyContent: 'center', alignItems: 'center'
          }}>Lorem Ipsum is simply dummy text of the printing and  industry been</Text>
          <View style={{
            flexDirection: 'row',
            width: "100%",
            justifyContent: 'space-between'
          }}>
            <Button transparent onPress={() => this.props.navigation.navigate('OnBoardingScreenOne')} style={{ alignSelf: 'flex-start' }}>
              <Text style={{
                color: "#333",
                fontSize: 12,
                justifyContent: 'center', alignItems: 'center',
                textAlign: 'left'
              }} >  Prev  </Text>
            </Button>
            <Button transparent onPress={() => this.props.navigation.navigate('OnBoardingScreenThree')} style={{ alignSelf: 'flex-end' }}>
              <Text style={{
                color: "#333",
                fontSize: 12,
                justifyContent: 'center', alignItems: 'center',
                textAlign: 'right'
              }} >  Next ></Text>
            </Button>
          </View>
        </ImageBackground> 
      </Container>
    );
  }
        
    
}
