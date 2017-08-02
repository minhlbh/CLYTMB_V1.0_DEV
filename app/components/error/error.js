import React, { Component } from "react";
import {Item,Icon,Text} from 'native-base';

export default class Error extends Component {
    render() {
        return (
            <Item style={{ borderColor: "transparent", alignSelf: 'center' }}>
                <Icon active style={{ color: "red", marginTop: 5 }} name="bug" />
                <Text style={{ fontSize: 15, color: "red" }}>{this.props.error}</Text>
            </Item>
        )
    }
}