import React, { Component } from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import Tabs from './TabsRouter';
import LoginStack from './LoginStack';
import Drawer from './Drawer'

export default (StackNav = StackNavigator({
    Tabs: {
        screen: Drawer,
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
