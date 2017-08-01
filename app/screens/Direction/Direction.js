import React, { Component } from "react";
import {
    Container, Header, Left, Body, Right, Content,
    Text, View,
    Button,
    Icon,
    Input,
    Item,
    Tabs,
    Tab,
    Title,
    List,
    ListItem,
    Thumbnail
} from 'native-base';
import styles from "./styles";
import { colors } from '../../config/styles';
import TabDirection from './TabDirection';
class Direction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearch: false,
        }
    }
    render() {
        return (
            <Container>

                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button transparent
                        onPress={() => this.setState({ isSearch: true })}
                    >
                        <Text>Search</Text>
                    </Button>
                </Header>

                {this.state.isSearch ? (
                    <Tabs>
                        <Tab heading="Bác sĩ">
                            <TabDirection tabNum='1' />
                        </Tab>
                        <Tab heading="Bệnh viện">
                            <TabDirection tabNum='2' />
                        </Tab>
                        <Tab heading="Phòng khám" >
                            <TabDirection tabNum='3' />
                        </Tab>
                    </Tabs>
                ) : (
                        <Content>
                            <List>
                                <ListItem itemDivider>
                                    <Icon name="md-alarm" />
                                    <Text>  Lịch sử tìm kiếm</Text>
                                </ListItem>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../../images/phucdo.jpg')} />
                                    </Left>
                                    <Body>
                                        <Text>Bác sĩ : Đỗ Thành Phúc</Text>
                                        <Text note>Số 3 ngách 55/51 Hoàng Hoa Thám</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem avatar>
                                    <Left>
                                        <Thumbnail source={require('../../images/phucdo.jpg')} />
                                    </Left>
                                    <Body>
                                        <Text>Bác sĩ : Phúc Đỗ</Text>
                                        <Text note>Giám đóc bệnh viện chợ rẫy</Text>
                                    </Body>
                                    <Right>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Thumbnail square size={80} source={require('../../images/Vinmec.png')} />
                                    <Body>
                                        <Text>Bệnh viện Vinmec Hà Nội</Text>
                                        <Text note>Bệnh Viện hàng đầu Việt Nam</Text>
                                    </Body>
                                </ListItem>
                            </List>
                        </Content>
                    )}
            </Container>
        );
    }
}

export default Direction; 