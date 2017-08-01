import React, { Component } from "react";
import {
    Item,
    Icon,
    Input,
} from 'native-base';


class SearchBar extends Component {
    render() {
        return (
            <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" />
            </Item>
        );
    }
}

export default SearchBar;