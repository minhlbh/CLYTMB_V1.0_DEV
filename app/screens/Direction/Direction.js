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
import { getStyles } from "./styles";
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
        let styles = getStyles(colors);
        return (
            <Container>

                <Header searchBar rounded style={styles.header}>
                    <Item >
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button transparent
                        onPress={() => this.setState({ isSearch: true })}
                    >
                        <Text style={styles.textHeader}>Search</Text>
                    </Button>
                </Header>

                {this.state.isSearch ? (
                    <Tabs tabBarUnderlineStyle={styles.underlineTab}>
                        <Tab heading="Bác sĩ"
                            activeTextStyle={styles.activeTextTab}
                        >
                            <TabDirection tabNum='1' />
                        </Tab>
                        <Tab heading="Bệnh viện"
                            activeTextStyle={styles.activeTextTab}
                        >
                            <TabDirection tabNum='2' />
                        </Tab>
                        <Tab heading="Phòng khám"
                            activeTextStyle={styles.activeTextTab}
                        >
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
                                <ListItem >
                                    <Text> Đỗ Thành Phúc</Text>
                                </ListItem>
                                <ListItem>
                                    <Text>Giám đóc bệnh viện chợ rẫy</Text>
                                </ListItem>
                                <ListItem>
                                    <Text>Bệnh viện Vinmec Hà Nội</Text>
                                </ListItem>
                            </List>
                        </Content>
                    )}
            </Container>
        );
    }
}

export default Direction; 