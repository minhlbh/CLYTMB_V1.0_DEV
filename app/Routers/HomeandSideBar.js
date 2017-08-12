import React, {Component} from 'react';
import {StackNavigator} from  'react-navigation';
import Home from '../screens/Home';
import SideBar from '../components/sideBar';

export const HomeandSideBar = StackNavigator({
    ManHinh_Home:{
        screen:Home
    },
    ManHinh_SideBar:{
        screen: SideBar
    }
})