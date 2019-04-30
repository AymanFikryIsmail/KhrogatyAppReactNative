/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image,View,StatusBar,ImageBackground} from 'react-native';

import { Container, Header, Title, Text,Button, Left, Right, Body, Icon } from 'native-base';

import { withNavigation } from 'react-navigation';

type Props = {};
export class MyHeader extends Component<Props> {

    state = { title: this.props.title , home:this.props.home}
    render() {
        const _navTitle = this.state.title;
        const regexTitle = /(&#038;)/ig;
        const navTitle = _navTitle.replace(regexTitle, '&');
        return (
            <View style={{ backgroundColor: '#eee' }}>
 <ImageBackground source={require('../images/Backgrounds/theme-header.png')} style={{width: "100%", height: 90 ,
      flexDirection: 'row' }}>
        <StatusBar  hidden={false} barStyle="light-content" backgroundColor="transparent" translucent={true}/>
       {this.backButton()}
   <Text style={{
            color: "#fff",
             fontSize: 20,
            marginTop:40,
            marginLeft:10,
             fontFamily:'IRANSans_Medium',
          }}>
         {navTitle} </Text>
      
  </ImageBackground>
            </View>

        );
    }

    backButton() {

        if (this.props.home!="1") {
            return (
                <Button transparent onPress={() => { this.props.navigation.goBack() }} style={{ marginTop:30,
                    color:"#fff"}}>
                            {/*  <Icon name='arrow-back' /> */}
                             <Image source={require('../images/Icons/left-arrow.png')} style={{
            width: 30, height: 25,
            marginHorizontal:10
          }} />
                         </Button>
            )
        } 
    }
}
// if i want to make header navigate with me 
// remove default from the header
// i can navigate through this component 
// 
export default withNavigation(MyHeader);

