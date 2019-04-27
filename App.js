/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Image, Text, View } from 'react-native';
import { createStackNavigator, createSwitchNavigator,createMaterialTopTabNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import Splash from './src/screens/Splash'
import OnBoardingScreenOne from './src/screens/OnBoardingScreenOne'
import OnBoardingScreenTwo from './src/screens/OnBoardingScreenTwo'
import OnBoardingScreenThree from './src/screens/OnBoardingScreenThree'

import Home from './src/screens/Home'
import RestaurantTabs from './src/screens/RestaurantTabs'
import RestaurantScreen from './src/screens/RestaurantScreen'
import SearchScreen from './src/screens/SearchScreen'
import ThingsToDoscreen from './src/screens/ThingsToDoscreen'
import FindPlecesScreen from './src/screens/FindPlacesScreen'


import DetailsTabs from './src/screens/DetailsTabs'
import DetailScreen from './src/screens/DetailScreen'

import MyHeader from './src/screens/MyHeader'


import { ImageBackground } from 'react-native';

const TabScreen = createBottomTabNavigator(
  {
    //Defination of Navigaton bottom options
    HomeScreen: { screen: Home },
    SearchScreen: { screen: SearchScreen },
    FindPlacesScreen: { screen: FindPlecesScreen },
    RestaurantScreen: { screen: RestaurantTabs ,
      navigationOptions: {
        header: props => <MyHeader title="Rest && Coffe Shops" home="1" />,
        headerStyle: {
          backgroundColor: "transparent"
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#555",
        },
        headerTintColor: "#555",
        animationEnabled: true
      }
    },
    ThingsToDoScreen: { screen: ThingsToDoscreen },
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'HomeScreen') {
          iconName = focused ? require('./src/images/Icons/ghome.png') : require('./src/images/Icons/home.png');
        } else if (routeName === 'SearchScreen') {
          iconName = focused ? require('./src/images/Icons/gfilter.png') : require('./src/images/Icons/filter.png');
        }
        else if (routeName === 'FindPlacesScreen') {
          iconName = focused ? require('./src/images/Icons/gfind-places.png') : require('./src/images/Icons/find-places.png');
        }
        else if (routeName === 'RestaurantScreen') {
          iconName = focused ? require('./src/images/Icons/grestaurants.png') : require('./src/images/Icons/restaurants.png');
        }
        else if (routeName === 'ThingsToDoScreen') {
          iconName = focused ? require('./src/images/Icons/gtodo.png') : require('./src/images/Icons/todo.png');
        }
        return <Image source={iconName} style={{
          width: 25, height: 25,
          justifyContent: 'center', alignItems: 'center'
        }} />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'green',
      inactiveTintColor: '#222',
    },
  }
);


const AppNavigator = createStackNavigator({
  Home: {screen: TabScreen,
     navigationOptions: {
    header:props =>null,
    headerStyle: {
      backgroundColor: "transparent"
    },
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#555",
    },
    headerTintColor: "#555",
    animationEnabled: true
  }
  },
  TopDetailscreen: {screen: DetailsTabs,
    navigationOptions: {
     
      header:null,
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#555",
      },
      headerTintColor: "#555",
      animationEnabled: true
    }
  }
});
const splashNavigator = createSwitchNavigator({
  Splash: Splash,
  OnBoardingScreenOne:OnBoardingScreenOne,
  OnBoardingScreenTwo:OnBoardingScreenTwo,
  OnBoardingScreenThree:OnBoardingScreenThree,
  Home1: {screen: AppNavigator,
    navigationOptions: {
      header:props =>null,
      headerStyle: {
        backgroundColor: "transparent"
      },
      headerTitleStyle: {
        fontWeight: "bold",
        color: "#555",
      },
      headerTintColor: "#555",
      animationEnabled: true
    }
  },
},
{ initialRouteName: "Splash" }
);
export default createAppContainer(splashNavigator);