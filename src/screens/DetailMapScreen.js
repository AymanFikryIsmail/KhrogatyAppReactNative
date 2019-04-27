/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, Linking,WebView, TextInput, View, StatusBar, AsyncStorage } from 'react-native';

import { Container, Header, Title, Content, Card, CardItem, Form, Button, Item, Input, Body, Spinner, Text } from 'native-base';

import MyHeader from './MyHeader'


type Props = {};
export default class DetailMapScreen extends Component<Props> {
  state = { title: this.props.title, name: "Your comment", comment: "", addingComment: 0, isLoading: true, dataSource: [] }

  static navigationOptions = {
    title: 'Details',
    header: null
  };
  componentDidMount() {
   // this.startNavigation("http://maps.google.com/maps/place/28.69875679999999,77.29257710000002")
  
  }
  render() {
    const navTitle = this.props.navigation.getParam('title', 'some value');
    const content = this.props.navigation.getParam('content', 'some value');
    const image = this.props.navigation.getParam('image', 'some value');
    const email_address = this.props.navigation.getParam('email_address', 'some value');
    const phone_number = this.props.navigation.getParam('phone_number', 'some value');
    const address = this.props.navigation.getParam('address', 'some value');
    const id = this.props.navigation.getParam('id');
    return (
      <Container >
        <Content >
        <WebView
    source={{uri: 'https://www.google.com/maps/@31.2120118,29.9162827,15z'}}
    style={{height : 400, width : "100%"}}
  />
        </Content>

      </Container>
    );
  }

  startNavigation(url) {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });
  }
}