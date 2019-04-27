import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Text, Tab,TabHeading, Tabs } from 'native-base';
import DetailScreen from './DetailScreen';
import DetailMapScreen from './DetailMapScreen';
import MyHeader from './MyHeader'


export default class DetailsTabs extends Component {
  render() {
    return (
      <Container>
        <MyHeader title={this.props.navigation.getParam('title')} home="2" />
        <Tabs  tabBarActiveTextColor={{color:"green"}}  tabBarUnderlineStyle={{borderBottomWidth:3 , borderColor:"green"}}>
          <Tab heading={ <TabHeading style={{backgroundColor: 'white'}}>
       <Image source={require('../images/Icons/about.png')} style={{ width: 25, height: 25, marginHorizontal: 10 }} /> 
          <Text Style={{Color: 'red'}} >About</Text>
          </TabHeading>} 

          tabStyle={{backgroundColor: 'white'}} textStyle={{color: 'red'}} 
          activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#000', fontWeight: 'normal'}}>
            <DetailScreen navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="Map" tabStyle={{backgroundColor: 'white'}} textStyle={{color: '#777'}} 
          activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#000', fontWeight: 'normal'}}>
           <DetailMapScreen navigation={this.props.navigation} /> 
           

          </Tab>
        
        </Tabs>
      </Container>
    );
  }
}