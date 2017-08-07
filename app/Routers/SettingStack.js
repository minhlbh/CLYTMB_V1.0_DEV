import React, { Component } from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import UserInfo from '../screens/Setting/MenuSetting/UserInfo';
import Setting from '../screens/Setting';
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
    }
})
)