import React, { Component } from "react";
import { TouchableOpacity } from 'react-native';
import {
    Container, Header, Left, Body, Right, Content,
    Text,
    List, ListItem,
    Card, CardItem,
    Thumbnail,
    Icon,
    Button,
    Input,
    Item
} from 'native-base';
console.disableYellowBox = true;
import styles from "./styles";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           isSearch : false,
        };
    }

    render() {
        return (
            <Container style={styles.container}>
                {!this.state.isSearch ? (
                <Header>
                    <Body>
                        <Text>Cloud y tế Trưởng Khoa</Text>
                    </Body>
                    <Right >
                        <Button transparent dark 
                            onPress ={() => this.setState({isSearch: true})}
                        >
                            <Icon name='md-search' />
                        </Button>
                    </Right>
                </Header> 
                ) :(
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button transparent
                        onPress ={() => this.setState({isSearch: false})}
                    >
                        <Text>Cancel</Text>
                    </Button>
                </Header>
                )}

                <Content style={styles.content}>
                    <List>
                        <ListItem itemDivider>
                            <Text>Tra cứu, nghiên cứu y học</Text>
                        </ListItem>

                        <Card>
                            <CardItem>
                              
                                <Icon active name="logo-googleplus" />
                              
                                <Body>
                                <Text>Bênh A-Z</Text>
                                 <Text note>Tra cứu các loại bênh</Text>
                                 </Body>
                                 <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Icon active name="logo-googleplus" />
                                <Text>Tra cứu thuóc</Text>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </CardItem>
                        </Card>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default Home;