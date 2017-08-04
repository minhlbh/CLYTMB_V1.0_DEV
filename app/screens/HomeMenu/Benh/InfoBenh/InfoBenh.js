import React, { Component } from 'react';

import {
    Container, Header, Left, Body, Right, Content,
    Text,
    Title,
    Tabs,
    Tab,
    Button,
    Icon,
    Card,
    CardItem
} from 'native-base';
import { FlatList, } from 'react-native';
import medicalApi from '../../../../api/medicalApi';
//import styles from './styles';
import HTMLView from 'react-native-htmlview';

class InfoBenh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: [],
        }
    }

    componentWillMount() {
        medicalApi.getDetailBenh(this.props.id).then(res => {
            this.setState({
                detail: res,
            })
        });
    }

    render() {

        return (
            <Container>
                <Content>
                    <Card style={{ paddingTop: 20 }}>
                        <CardItem>
                            <HTMLView
                                value={this.state.detail.TomTat}
                            />
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

export default InfoBenh;
