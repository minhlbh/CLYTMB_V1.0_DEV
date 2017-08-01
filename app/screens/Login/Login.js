import React, { Component } from "react";
import {
    Container, Header, Left, Body, Right, Content,
    Text, View,
    Button,
    Grid,
    Col, Row,
    Icon,
    Input,
    Item
} from 'native-base';
import { Image } from 'react-native';
import styles from "./styles";
import images from '../../config/images';
import { colors } from '../../config/styles';

class Login extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content scrollEnabled={false}>
                    <View style={styles.logoContainer}>
                        <Image source={images.logo} style={styles.logoImage} />
                        <Text style={styles.logoText}> Trưởng Khoa </Text>
                    </View>
                    <View style={styles.bg}>
                        <Grid>
                            <Col style={{ width: 30 }}>
                                <Row style={{ marginTop: 23 }}>
                                    <Icon
                                        style={styles.icon}
                                        name="md-call" />
                                </Row>
                                <Row style={{ marginTop: 20 }}>
                                    <Icon
                                        style={styles.icon}
                                        name="md-unlock" />
                                </Row>
                            </Col>

                            <Col>
                                <Item style={styles.item}>
                                    <Input
                                        style={styles.input}
                                        placeholder="Mật khẩu"
                                    />
                                </Item>
                                <Item style={styles.item}>
                                    <Input
                                        style={styles.input}
                                        placeholder="Số điện thoại"
                                        secureTextEntry={true}
                                    />
                                </Item>
                            </Col>
                        </Grid>



                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Button success
                                style={styles.btnLogin}
                                onPress={() => this.props.navigation.navigate('Tabs')}
                            >
                                <Text style={{ width: 133, textAlign: 'center' }}>Đăng nhập</Text>
                            </Button>
                            <Button bordered
                                style={styles.btnRegister}
                                onPress={() => this.props.navigation.navigate('Signup')}
                            >
                                <Text style={{ width: 133, textAlign: 'center', color: colors.light }}>Đăng kí</Text>
                            </Button>
                        </View>

                        <Button transparent
                            style={styles.btnTransparent}
                        // onPress={() => this.props.navigation.navigate("InputPhone")}
                        >
                            <Text style={{ color: colors.light }}>Quên mật khẩu ?</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default Login;