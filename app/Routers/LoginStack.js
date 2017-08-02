import React, { Component } from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import InputCode from '../screens/Signup/InputCode'

export default (LoginStack = StackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Signup: {
        screen: Signup,
        navigationOptions: {
            header: null
        }
    },
    InputCode: {
        screen: InputCode,
        navigationOptions: {
            header: null
        }
    }
}));
