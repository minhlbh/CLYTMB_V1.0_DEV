import React, { Component } from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import UserInfo from '../screens/Setting/MenuSetting/UserInfo';
import Setting from '../screens/Setting';
import AboutUs from '../screens/Setting/MenuSetting/AboutUs';
import Notification from '../screens/Setting/MenuSetting/Notification';
import Update from '../screens/Setting/MenuSetting/Update'
export default (SettingStack = StackNavigator({

    Setting:{
        screen: Setting,
        navigationOptions: {
            header: null
        }
    },
    UserInfo: {
        screen: UserInfo,
        navigationOptions: {
            header: null
        }
    },
    AboutUs:{
        screen: AboutUs,
        navigationOptions:{
            header:null
        }
    },
    Notification:{
        screen: Notification,
        navigationOptions:{
            header: null
        }
    },
    Update:{
        screen: Update,
        navigationOptions:{
            header:null
        }
    }

})
)