import React from "react";
import { DrawerNavigator } from "react-navigation";
import MainStackRouter from './MainStackRouter';
import Tabs from './TabsRouter';
import SideBar from '../components/sideBar';
import Home from '../screens/Home'


export default SlideBar = DrawerNavigator({
    SlideBar:{
        screen: Tabs,
    },
    SideBar:{
        screen: SideBar
    },
    },{
    drawerWidth: 250,
    drawerPosition: 'left',
    contentComponent: props => <SideBar{...props}/>
    }
)
    