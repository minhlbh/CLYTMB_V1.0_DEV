import React, { Component } from "react";
import { Image } from 'react-native';
import {
    Container, Header, Left, Body, Right, Content,
    Text,Title,
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

class News extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Tin tức</Title>
                    </Body>
                </Header>
                <Content>
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