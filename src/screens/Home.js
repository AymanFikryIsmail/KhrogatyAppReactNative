/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image,ImageBackground ,StatusBar,AsyncStorage} from 'react-native';
import { Container , Text, Spinner } from 'native-base';


type Props = {};
export default class Home  extends Component<Props> {
  state = { title: this.props.title }

  static navigationOptions = {
    title: 'Home',
    header:null
  };
  render() {
    return (
      <Container >
      <StatusBar visible />

      <ImageBackground source={require('../images/Backgrounds/home-header.png')} style={{width: '100%',height: 150 ,
      flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <Image source={require('../images/Logo/khrogaty-logo.png')}  style={{width: 100, height: 100 ,
      justifyContent: 'center', alignItems: 'center'
      }} />
      
  </ImageBackground>
  <Text style={{
            color: "#444",
            margin: 10,
            padding:10,
            fontWeight: 'bold', fontSize: 12,
          }}>
         <Image source={require('../images/VectorIcons/home-first-icon.png')} style={{
            width: 30, height: 30, 
               marginHorizontal: 100,

          }} />   Places For Going Out</Text>


<Text style={{
            color: "#444",
            margin: 10,
            padding:10,
            fontWeight: 'bold', fontSize: 12,
          }}>
         <Image source={require('../images/VectorIcons/home-second-icon.png')} style={{
            width: 30, height: 30, 
               marginHorizontal: 100,

          }} />  Restaurants && Cofee Shops</Text>
<Text style={{
            color: "#444",
            margin: 10,
            padding:10,
            fontWeight: 'bold', fontSize: 12,
          }}>
         <Image source={require('../images/VectorIcons/home-third-icon.png')} style={{
            width: 30, height: 30, 
               marginHorizontal: 100,

          }} />   What Do I Do ?</Text>
      </Container>
    );
  }
  moveToHome(){
    AsyncStorage.getItem("firstlunch").then((firstlunch)=>{
      setTimeout(()=>{
        if(firstlunch==="yes"){
          this.props.navigation.navigate('OnBoardingScreen');
        }else{
          this.props.navigation.navigate('Home');
        }
      },1000)
    })

  }
}
