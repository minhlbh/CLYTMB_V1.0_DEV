import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Button,
    Icon,
    Tabs,
    Tab,
    Right,
    Left,
    Body,
    ScrollableTab,
    Text
} from "native-base";
import TabBookmark from './TabBookmark';
import { getStyles } from "./styles";
import { colors } from '../../config/styles';
class Bookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDelete: false,
        };
    }
    render() {
        let styles = getStyles(colors);
        return (
            <Container>
                <Header hasTabs style={styles.header}>
                    <Left />
                    <Body>
                        <Title style={styles.textHeader}>Lưu trữ</Title>
                    </Body>
                    <Right>
                        {!this.state.isDelete ?
                            <Button transparent
                                onPress={() => this.setState({ isDelete: true })}
                            >
                                <Icon style={styles.textHeader} active name='md-trash' />
                            </Button>
                            :
                            <Button transparent
                                onPress={() => this.setState({ isDelete: false })}
                            >
                                <Icon style={styles.textHeader} active name='md-close' />
                            </Button>
                        }
                    </Right>
                </Header>
                <Tabs tabBarUnderlineStyle={styles.underlineTab}
                    renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Tất cả"
                        activeTextStyle={styles.activeTextTab}
                    >
                        <TabBookmark tabNum='1' isDelete={this.state.isDelete} />
                    </Tab>
                    <Tab heading="Bệnh"
                        activeTextStyle={styles.activeTextTab}
                    >
                        <TabBookmark tabNum='2' isDelete={this.state.isDelete} />
                    </Tab>
                    <Tab heading="Thuốc"
                        activeTextStyle={styles.activeTextTab}
                    >
                        <TabBookmark tabNum='3' isDelete={this.state.isDelete} />
                    </Tab>
                    <Tab heading="Chỉ dẫn"
                        activeTextStyle={styles.activeTextTab}
                    >
                        <TabBookmark tabNum='4' isDelete={this.state.isDelete} />
                    </Tab>
                    <Tab heading="Tin tức"
                        activeTextStyle={styles.activeTextTab}
                    >
                        <TabBookmark tabNum='5' isDelete={this.state.isDelete} />
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

export default Bookmark; 