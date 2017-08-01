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
import TabBookmark from './TabBookmark'

class Bookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDelete: false,
        };
    }
    render() {
        return (
            <Container>
                <Header hasTabs>
                    <Left />
                    <Body>
                        <Title>Lưu trữ</Title>
                    </Body>
                    <Right>
                        {!this.state.isDelete ? 
                        <Button transparent 
                            onPress={() => this.setState({ isDelete: true })}
                        >
                            <Icon active name='md-trash' />
                        </Button>
                        :
                         <Button transparent 
                            onPress={() => this.setState({ isDelete: false })}
                        >
                           <Icon active name='md-close' />
                        </Button>
                        }
                    </Right>
                </Header>
                <Tabs renderTabBar={() => <ScrollableTab />}>
                    <Tab heading="Tất cả">
                        <TabBookmark tabNum='1' isDelete={this.state.isDelete} />
                    </Tab>
                    <Tab heading="Bệnh">
                        <TabBookmark tabNum='2' isDelete={this.state.isDelete}/>
                    </Tab>
                    <Tab heading="Thuốc">
                        <TabBookmark tabNum='3' isDelete={this.state.isDelete}/>
                    </Tab>
                    <Tab heading="Chỉ dẫn">
                        <TabBookmark tabNum='4' isDelete={this.state.isDelete}/>
                    </Tab>
                    <Tab heading="Tin tức">
                        <TabBookmark tabNum='5' isDelete={this.state.isDelete}/>
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

export default Bookmark; 