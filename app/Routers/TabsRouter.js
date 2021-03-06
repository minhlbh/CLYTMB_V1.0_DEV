import React, {Component} from 'react';
import {  TabNavigator } from "react-navigation";
import HomeStack from './HomeStack';
import {Icon} from 'native-base';
import SettingStack from './SettingStack';
import News from '../screens/News';
import Bookmark from '../screens/Bookmark';
import Direction from '../screens/Direction';
import {colors ,setColors} from '../config/styles'
const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="md-home"  style={{ color: tintColor }} />,
    },
  },

  Direction: {
    screen: Direction,
    navigationOptions: {
      tabBarLabel: 'Chỉ dẫn',
      tabBarIcon: ({ tintColor }) => <Icon name="md-navigate" style={{ color: tintColor }} />
    },
  },

  News: {
    screen: News,
    navigationOptions: {
      tabBarLabel: 'Tin tức',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-paper" style={{ color: tintColor }} />
    },
  },
  
  Bookmark: {
    screen: Bookmark,
    navigationOptions: {
      tabBarLabel: 'Lưu trữ',
      tabBarIcon: ({ tintColor }) => <Icon name="md-bookmark" style={{ color: tintColor }} />
    },
  },
  Setting: {
    screen: SettingStack,
    navigationOptions: {
      tabBarLabel: 'Cài đặt',
      tabBarIcon: ({ tintColor }) => <Icon name="md-settings" style={{ color: tintColor}} />
    },
  },
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: colors.dark,
      inactiveTintColor: '#CCC',
      showIcon: true,
      style: {
        backgroundColor: '#FFF',
        height: 51,
        paddingTop:0
      },
      labelStyle: {
        fontSize: 8.5,
        backgroundColor: colors.background
      },
      indicatorStyle:{
        backgroundColor: colors.light,
      },
    }
  });

  export default Tabs;