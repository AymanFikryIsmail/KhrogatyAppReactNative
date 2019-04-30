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
    const map_location = this.props.navigation.getParam('map_location', 'some value');
    return (
      <Container >
        <Content >
        <WebView
    source={{uri: map_location}}
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