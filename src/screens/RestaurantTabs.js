import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import RestaurantScreen from './RestaurantScreen';
import RestaurantScreen2 from './RestaurantScreen';
import RestaurantScreen3 from './RestaurantScreen';
import MyHeader from './MyHeader'


export default class RestaurantTabs extends Component {
  render() {
    return (
      <Container>
        <MyHeader title="Rest && Coffe Shops" home="1" />
        <Tabs tabBarUnderlineStyle={{borderBottomWidth:2 , borderColor:"green"}}>
      {/*   <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}> */}
          <Tab heading="All" tabStyle={{backgroundColor: 'white'}} textStyle={{color: '#777'}} 
          activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#000', fontWeight: 'normal'}}>
            <RestaurantScreen navigation={this.props.navigation}/>
          </Tab>
          <Tab heading="Restaurants" tabStyle={{backgroundColor: 'white'}} textStyle={{color: '#777'}} 
          activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#000', fontWeight: 'normal'}}>
            <RestaurantScreen2 navigation={this.props.navigation} />
          </Tab>
          <Tab heading="Coffe shops" tabStyle={{backgroundColor: 'white'}} textStyle={{color: '#777'}} 
          activeTabStyle={{backgroundColor: 'white'}} activeTextStyle={{color: '#000', fontWeight: 'normal'}}>
            <RestaurantScreen3 navigation={this.props.navigation} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}