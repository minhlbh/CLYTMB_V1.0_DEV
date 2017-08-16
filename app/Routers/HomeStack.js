import React, { Component } from "react";
import { StackNavigator, } from "react-navigation";
import Home from '../screens/Home';
import ListBenh from '../screens/HomeMenu/Benh';
import DetailBenh from '../screens/HomeMenu/Benh/DetailBenh';
import SideBar from '../components/sideBar';
import ListThuoc from '../screens/HomeMenu/Thuoc';

export default (HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    },
    tracuubenh: {
        screen: ListBenh,
        navigationOptions: {
            header: null
        }
    },
    DetailBenh: {
        screen: DetailBenh,
        navigationOptions: {
            header: null
        }
    },
    tracuuthuoc:{
        screen: ListThuoc,
        navigationOptions: {
            header: null
        }
    },
}));
