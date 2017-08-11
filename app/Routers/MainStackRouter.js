import React, { Component } from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import Tabs from './TabsRouter';
import LoginStack from './LoginStack';
import SlideBar from './SlideBar'

export default (StackNav = StackNavigator({
    Tabs: {
        screen: SlideBar,
        navigationOptions: {
            header: null
        }
    },
    LoginStack: {
        screen: LoginStack,
        navigationOptions: {
            header: null
        }
    },

}));
