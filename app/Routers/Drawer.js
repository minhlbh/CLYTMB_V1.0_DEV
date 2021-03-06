import React from "react";
import { DrawerNavigator } from "react-navigation";
import MainStackRouter from './MainStackRouter';
import Tabs from './TabsRouter';
import SideBar from '../components/sideBar';


export default Drawer = DrawerNavigator({
    SideBar:{
        screen: Tabs,
    },
    },{
    drawerWidth: 290,
    drawerPosition: 'left',
    contentComponent: props => <SideBar{...props}/>
    }
)
    