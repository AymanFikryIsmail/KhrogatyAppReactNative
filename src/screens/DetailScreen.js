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
  state = { title: this.props.title }

  static navigationOptions = {
    title: 'Search',
    header: null
  };

  render() {
    const navTitle = this.props.navigation.getParam('title', 'some value');
    const content = this.props.navigation.getParam('content', 'some value');
    const image = this.props.navigation.getParam('image', 'some value');
    const email_address = this.props.navigation.getParam('email_address', 'some value');
    const phone_number = this.props.navigation.getParam('phone_number', 'some value');
    const address = this.props.navigation.getParam('address', 'some value');


    return (
      <Container >
        <Content>
          <Image source={{ uri: image }} style={{ height: 120, width: "100%" }} />

          <Card style={{
            width: '100%', margin: 18,
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
          }}>
            <CardItem>
              <Body >
                <Text style={{ fontSize: 12, fontWeight: 'bold', color: "#000" }}>{navTitle} </Text>
                <Text style={{ fontSize: 12, color: "#999", }}>{content}</Text>
              </Body>
            </CardItem>
          </Card>
          <Text style={{ fontSize: 18, marginStart: 10, color: "#000" }}>More Information </Text>
          <Card style={{
            width: '100%',
            flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
          }}>
            <CardItem>
              <Body >
                <View style={{ width: "100%", flex: 1, flexDirection: 'row', margin: 5 }}>
                  <Image source={require('../images/Icons/address.png')} style={{ width: 25, height: 25, marginHorizontal: 10 }} />
                  <Text style={{ color: "#444", padding: 5, fontSize: 10, flex: 1 }}> {address}</Text>
                </View>
                <View style={{ width: "100%", flex: 1, flexDirection: 'row', margin: 5 }}>
                  <Image source={require('../images/Icons/call.png')} style={{ width: 25, height: 25, marginHorizontal: 10 }} />
                  <Text style={{ color: "#444", padding: 5, fontSize: 10, flex: 1 }}> {phone_number}</Text>
                </View>

                <View style={{ width: "100%", flex: 1, flexDirection: 'row', margin: 5 }}>
                  <Image source={require('../images/Icons/mail.png')} style={{ width: 25, height: 25, marginHorizontal: 10 }} />
                  <Text style={{ color: "#444", padding: 5, fontSize: 10, flex: 1 }}> {email_address}</Text>
                </View>
              </Body>
            </CardItem>
          </Card>
          <View style={{ width: "100%", flex: 1, flexDirection: 'column', margin: 5 }}>
            <Text style={{ fontSize: 16, margin: 8 }}>Leave a Comment</Text>

            <View style={{
              width: "100%", flex: 1, flexDirection: 'row', marginEnd: 5, borderColor: '#CCCCCC',
              borderRadius: 6,
              borderWidth: 1,
              justifyContent:"space-between"
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





  commentButton() {
    if (this.state.addingComment === 0) {
      return (
        <Button onPress={() => {
          this.addComment();
          this.setState({ addingComment: 1 })
        }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Add Comment</Text>
        </Button>
      )
    } else {
      return (
        <Button onPress={() => {
        }}>
          <Spinner />
        </Button>

      )
    }
  }

  addComment() {
    fetch('http://reactnative.website/iti/wp-json/wp/v2/comments?author_name=' + this.state.name + '&author_email=itialex39@roqay.com.kw&content=' + this.state.comment + '&post=' + this.props.navigation.getParam('id'), {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())
      .then((rj) => {
        this.setState({ addCommentRes: rj, addingComment: 0, name: "", comment: "" }, function () {
          console.log(rj);
          alert(rj.id);
        })
      })
  }
}