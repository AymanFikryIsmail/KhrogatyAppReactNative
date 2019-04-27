/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image, TouchableHighlight, TextInput, View, StatusBar, AsyncStorage } from 'react-native';

import { Container, Header, Title, Content, Card, CardItem, Form, Button, Item, Input, Body, Spinner, Text } from 'native-base';

import MyHeader from './MyHeader'


type Props = {};
export default class DetailScreen extends Component<Props> {
  state = { title: this.props.title, name: "Your comment", comment: "", addingComment: 0, isLoading: true, dataSource: [] }

  static navigationOptions = {
    title: 'Details',
    header: null
  };
  componentDidMount() {
    this.getComments();
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
          <Image source={{ uri: image }} style={{height: 150, width: "100%" }} />
          <Card style={{
            width: '100%', borderRadius: 10, marginHorizontal:10,
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
          }}>

            <CardItem style={{ borderRadius: 10 }} >
              <Body >
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: "#000" }}>{navTitle} </Text>
                <Text style={{ fontSize: 12, color: "#999", }}>{content}</Text>
              </Body>
            </CardItem>
          </Card>
          <Text style={{ fontSize: 18, marginStart: 20, color: "#000" }}>More Information </Text>
          <Card style={{
            marginHorizontal: 10,
            borderRadius: 10,
            flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center'
          }}>
            <CardItem style={{ borderRadius: 10 }} >
              <Body >
                <View style={{ width: "100%", flex: 1, flexDirection: 'row', marginBottom: 5 }}>
                  <Image source={require('../images/Icons/address.png')} style={{ width: 25, height: 25, }} />
                  <Text style={{ color: "#999", padding: 5, fontSize: 10, flex: 1 }}> {address}</Text>
                </View>
                <View style={{ width: "100%", flex: 1, flexDirection: 'row', marginBottom: 5 }}>
                  <Image source={require('../images/Icons/call.png')} style={{ width: 25, height: 25, }} />
                  <Text style={{ color: "#999", padding: 5, fontSize: 10, flex: 1 }}> {phone_number}</Text>
                </View>

                <View style={{ width: "100%", flex: 1, flexDirection: 'row', marginBottom: 5 }}>
                  <Image source={require('../images/Icons/mail.png')} style={{ width: 25, height: 25, }} />
                  <Text style={{ color: "#999", padding: 5, fontSize: 10, flex: 1 }}> {email_address}</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
          <View style={{ width: "100%", flex: 1, flexDirection: 'column', margin: 5 }}>
            <Text style={{ fontSize: 16, margin: 20 }}>Leave a Comment</Text>
            {this.returnData()}
            <View style={{
              width: "100%", flex: 1, flexDirection: 'row', marginEnd: 5, borderColor: '#CCCCCC',
              borderRadius: 6,
              borderWidth: 1,
              justifyContent: "space-between"
            }}>
              <View>
                <TextInput
                  style={{
                    height: 40,
                    fontSize: 20,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                  onChangeText={(name) => this.setState({ name })}
                  value={this.state.name}
                  placeholder='Your comment'
                  keyboardType='web-search'
                  onSubmitEditing={() => { this.addComment() }}
                  ref='searchBar'
                />
              </View>
              <TouchableHighlight style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => { this.addComment() }} underlayColor='transparent'>
                <View>
                  <Image source={require('../images/Icons/telegram.png')} style={{ width: 30, height: 30, marginHorizontal: 10 }} />
                </View>
              </TouchableHighlight>
            </View>
          </View>

        </Content>

      </Container>
    );
  }


  getComments() {
    return fetch('http://reactnative.website/iti/wp-json/wp/v2/comments?post=' + this.props.navigation.getParam('id'))
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
  returnData() {
    return (
      this.state.dataSource.map((mapData) => {
        let date = new Date(mapData.date);
        let hour = date.getHours();
        let minutes = date.getMinutes();
        if (hour <= 11) {
          TimeType = 'AM';
        }
        else {
          TimeType = 'PM';
        }
        if (hour > 12) {
          hour = hour - 12;
        }
        if (hour == 0) {
          hour = 12;
        }
        return (
          <View key={mapData.id} style={{ width: "100%", flex: 1, flexDirection: 'column', margin: 5 }}>
            <View style={{ width: "100%", flex: 1, flexDirection: 'row', margin: 5 }}>
              <Image source={require('../images/Icons/profile.png')} style={{ height: 30, width: 30 }} />
              <Text style={{ color: "#000", fontSize: 10, margin: 5 }} >  {mapData.author_name} </Text>
              <Text style={{ color: "#999", fontSize: 10, margin: 5, }} > {hour + ":" + minutes + " " + TimeType}</Text>
            </View>
            <Text style={{ color: "#999", fontSize: 10, marginHorizontal: 50, }} >  {mapData.content.rendered} </Text>
            <View
              style={{
                marginTop: 5,
                marginHorizontal: 5,
                borderBottomColor: '#999',
                borderBottomWidth: .3,
              }}
            />
          </View>

        )
      })
    )
  }
  addComment() {
    fetch('http://reactnative.website/iti/wp-json/wp/v2/comments?author_name='
      + "tarek" + '&author_email=itialex39@roqay.com.kw&content=' + this.state.name + '&post=' + this.props.navigation.getParam('id'), {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json())
      .then((rj) => {
        this.setState({ addCommentRes: rj, addingComment: 0, name: "", comment: "" }, function () {
          console.log(rj);
          //  alert(rj.id);
          this.getComments();
        })
      })
  }
}