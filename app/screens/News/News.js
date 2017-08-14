import React, { Component } from "react";
import { Image } from 'react-native';
import {
    Container, Header, Left, Body, Right, Content,
    Text, Title,
    Card, CardItem,
    Thumbnail,
    Icon,
    Button,
    Input,
    Item,
    Grid,
    Col,
    Row
} from 'native-base';
import { getStyles } from "./styles";
import { colors } from '../../config/styles';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearch: false,
        };
    }
    render() {
        let styles = getStyles(colors);
        return (
            <Container>
                {!this.state.isSearch ? (
                    <Header style={styles.header}>
                        <Left />
                        <Body>
                            <Title style={styles.textHeader}>Tin tức</Title>
                        </Body>
                        <Right >
                            <Button transparent dark
                                onPress={() => this.setState({ isSearch: true })}
                            >
                                <Icon style={styles.textHeader} name='md-search' />
                            </Button>
                        </Right>
                    </Header>
                ) : (
                        <Header style={styles.header} searchBar rounded>
                            <Item>
                                <Icon name="ios-search" />
                                <Input placeholder="Search" />
                            </Item>
                            <Button transparent
                                onPress={() => this.setState({ isSearch: false })}
                            >
                                <Text style={styles.textHeader}>Cancel</Text>
                            </Button>
                        </Header>
                    )}
                < Content >
                    <Grid>
                        <Row>
                            <Col>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../../images/path.jpg')} style={{ height: 100, width: 100, flex: 1 }} />
                                    </CardItem>
                                    <CardItem>
                                        <Text>Cẩm nang chăm sóc sức khoẻ</Text>
                                    </CardItem>
                                </Card>
                            </Col>
                            <Col>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../../images/path.jpg')} style={{ height: 100, width: 100, flex: 1 }} />
                                    </CardItem>
                                    <CardItem>
                                        <Text>Cẩm nang chăm sóc sức khoẻ</Text>
                                    </CardItem>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../../images/path.jpg')} style={{ height: 100, width: 100, flex: 1 }} />
                                    </CardItem>
                                    <CardItem>
                                        <Text>Cẩm nang chăm sóc sức khoẻ</Text>
                                    </CardItem>
                                </Card>
                            </Col>
                            <Col />
                        </Row>
                    </Grid>
                </Content>
            </Container>
        )
    }
}

export default News;