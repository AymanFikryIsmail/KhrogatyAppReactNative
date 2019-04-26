/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image,ImageBackground ,Animated,Easing,StatusBar,AsyncStorage} from 'react-native';
import { Container } from 'native-base';


type Props = {};
export default class Splash  extends Component<Props> {
  constructor(props) {
    super(props);
    this.animatedValue = new Animated.Value(0);
    this.animate();
}
  state = { title: this.props.title }

  static navigationOptions = {
    title: 'single news',
    header:null
  };
  animate() {
    this.animatedValue.setValue(0);
    Animated.timing(this.animatedValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear
    }).start(() => this.animate());
}
  render() {
    const opacity = this.animatedValue.interpolate({
      inputRange: [0, .5, 1],
      outputRange: [0, 1, 1]
  });
    return (
      <Container >
      <StatusBar hidden />
    {/*   <Animated.View style={{opacity, flex: 1}}> */}
      <ImageBackground source={require('../images/Backgrounds/splash-bg.png')} style={{width: '100%', height: '100%',
      flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
    <Image source={require('../images/Logo/khrogaty-logo.png')}  style={{width: 120, height: 120 ,
      justifyContent: 'center', alignItems: 'center'
      }} />
  </ImageBackground>
    {this.moveToHome()} 
    {/* </Animated.View> */}
      </Container>
    );
  }
  moveToHome(){
    AsyncStorage.getItem("firstlunch").then((firstlunch)=>{
      setTimeout(()=>{
        if(firstlunch==="yes"){
          this.props.navigation.navigate('Home');
        }else{
          this.props.navigation.navigate('OnBoardingScreenOne');
        }
      },1000)
    })

  }
}
