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
export default class OnBoardingScreen extends Component<Props> {
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

      <Container style={{ backgroundColor: "#f00", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

        {this.getScreen()}
      </Container>
    );
  }
  getScreen() {
    if (this.state.current == "1") {
      return (
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

          <Button transparent onPress={() => this.setState({ current: "2" })} style={{ alignSelf: 'flex-end' }}>
            <Text style={{
              color: "#333",
              fontSize: 12,
              justifyContent: 'center', alignItems: 'center',
              textAlign: 'right'
            }} >  Next  ></Text>
          </Button>
        </ImageBackground>
      )

    } else if (this.state.current == "2") {
      return (
        <ImageBackground source={require('../images/Backgrounds/onboarding-bg-right.png')} style={{
          width: '100%', height: '100%', justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image source={require('../images/Logo/khrogaty-logo.png')} style={{
            width: 110, height: 110,
            marginTop: 195,
            justifyContent: 'center', alignItems: 'center'
          }} />
          <Image source={require('../images/VectorIcons/home-second-icon.png')} style={{
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
            <Button transparent onPress={() => this.setState({ current: "1" })} style={{ alignSelf: 'flex-start' }}>
              <Text style={{
                color: "#333",
                fontSize: 12,
                justifyContent: 'center', alignItems: 'center',
                textAlign: 'left'
              }} >  Prev  </Text>
            </Button>
            <Button transparent onPress={() => this.setState({ current: "3" })} style={{ alignSelf: 'flex-end' }}>
              <Text style={{
                color: "#333",
                fontSize: 12,
                justifyContent: 'center', alignItems: 'center',
                textAlign: 'right'
              }} >  Next ></Text>
            </Button>
          </View>
        </ImageBackground>
      )
    } else if (this.state.current == "3") {
      return (
        <ImageBackground source={require('../images/Backgrounds/onboarding-bg-left.png')} style={{
          width: '100%', height: '100%', justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Image source={require('../images/Logo/khrogaty-logo.png')} style={{
            width: 110, height: 110,
            marginTop: 150,
            justifyContent: 'center', alignItems: 'center'
          }} />
          <Image source={require('../images/VectorIcons/home-third-icon.png')} style={{
            width: 45, height: 45,
            marginTop: 150,
            justifyContent: 'center', alignItems: 'center'
          }} />
          <Text style={{
            color: "#444",
            marginTop: 15,
            fontWeight: 'bold', textAlign: 'center', fontSize: 15,
            justifyContent: 'center', alignItems: 'center'
          }}>What Do I Do ?</Text>
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
            <Button transparent onPress={() => this.setState({ current: "2" })} style={{ alignSelf: 'flex-start' }}>
              <Text style={{
                color: "#333",
                fontSize: 12,
                justifyContent: 'center', alignItems: 'center',
                textAlign: 'left'
              }} >  Prev  </Text>
            </Button>

            <Button   onPress={() => this.changeFirstLunch()} style={{ 
              backgroundColor:"green",
               height:25,
               textAlign: 'center' ,
               marginTop:5,
               paddingEnd:10,
               paddingStart:10,
               marginRight:140,
               borderRadius:10,
               borderWidth: 1,
               borderColor: '#fff'
              }}>
              <Text style={{
                color: "#fff",
                fontSize: 10,
                justifyContent: 'center', alignItems: 'center',
                textAlign: 'center'
              }} >  Start  </Text>
            </Button>
          </View>
        </ImageBackground>
      )
    }

  }
  changeFirstLunch() {
    AsyncStorage.setItem("firstlunch", "yes");
    this.props.navigation.replace('Home');

  }
}
