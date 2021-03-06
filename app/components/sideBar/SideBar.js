import React, { Component } from "react";
import { Image } from "react-native";
import {
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
    Right,
    Badge,
    Button,
    View,
    StyleProvider,
    getTheme,
    variables,
    Thumbnail,
    Body
} from "native-base";
import apiUrl from '../../config/api';
import styles from "./styles";
import {setColors}  from '../../config/styles';
class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }
    componentWillMount() {
        return fetch(apiUrl.listSideBar)
            .then((res) => res.json())
            .then((res) => this.setState({ data: res.dssystem }))
            .catch((error) => {
                console.error(error);
            })
            setColors('#cc5262','"#ff7e91')
        }
    render() {
        return (
            <Container>
                <Content style={{marginTop: 30}}>
                    <List
                        dataArray={this.state.data}
                        renderRow={data =>
                            <ListItem button onPress={() =>{
                                setColors(data.MauDam, data.mauNhat);
                                this.props.navigation.navigate('Tabs', {
                                url: data.Domain,
                            });
                            
                        }}>
                                <Left style={{width: 50}}>
                                    <Thumbnail square active source={{ uri: data.Logo }} style={{ width: 35, height: 35 }} />
                                    <Body style={{marginTop: 8}}>
                                    <Text>{data.Ten}</Text>
                                </Body>
                                </Left>
                               
                            </ListItem>}
                    />
                </Content>
            </Container>
        );
    }
}

export default SideBar;