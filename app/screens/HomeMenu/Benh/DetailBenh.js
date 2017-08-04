import React, { Component } from 'react';
import {
    Container, Header, Left, Body, Right, Content,
    Text,
    Title,
    Tabs,
    Tab,
    Button,
    Icon
} from 'native-base';
import { FlatList, } from 'react-native';
import medicalApi from '../../../api/medicalApi';
import styles from './styles';
import InfoBenh from './InfoBenh';

class DetailBenh extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Header hasTabs style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon style={styles.textHeader} name="ios-arrow-back" />
                        </Button >
                    </Left>

                    <Body>
                        <Title style={styles.textHeader}>{this.props.navigation.state.params.name}</Title>
                    </Body>

                    <Right />
                </Header>
                 <Tabs >
                    <Tab heading="Thông tin bệnh ">
                        <InfoBenh id={this.props.navigation.state.params.id}/>
                    </Tab>
                    <Tab heading="Diễn đàn">
                        <InfoBenh id={this.props.navigation.state.params.id}/>
                    </Tab>
                </Tabs> 
            </Container>
        )
    }
}

export default DetailBenh;