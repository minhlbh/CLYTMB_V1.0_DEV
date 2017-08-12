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
import { Image, AsyncStorage } from 'react-native';
import styles from "./styles";
import images from '../../config/images';
import { colors } from '../../config/styles';
import accountApi from '../../api/accountApi';
import Error from '../../components/error';
import Loading from '../../components/loading';
import FBSDK, { LoginManager , AccessToken, LoginButton} from 'react-native-fbsdk';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: "",
            pass: "",
            error: "",
            loading: false
        };
    }

    _loginFacebook() {   
        AccessToken.getCurrentAccessToken().then(
            (data) => {
                fetch(`https://graph.facebook.com/me?fields=email&&access_token=${data.accessToken.toString()}`)
                .then((response) => response.json())
                .then((res) => {
                   
                    accountApi.checkFacebookLogin(data.userId, res.email, data.accessToken.toString()).then(response =>{
                        console.log(data.accessToken.toString()+'******'+data.userId);
                        alert(response.mess);
                    }).catch((error) => {
                        alert(error)
                    })                 
                }) 
            }
        )
    }
     

    login = () => {
        this.setState({ loading: true });
        var ph = this.state.phone;
        var pw = this.state.pass;
        accountApi.getToken(ph, pw).then(res => {
            console.log(res.access_token);
            this.setState({ loading: false });
            if (res.access_token) {
                this.props.navigation.navigate("Tabs");
                AsyncStorage.setItem('access_token', res.access_token);
            } else {
                this.setState({ error: "Sai tên số điện thoại hoặc mật khẩu" });
            }
        });

    }

    render() {
        return (
            <Container style={styles.container}>
                <Content scrollEnabled={false}>

                    <View style={styles.logoContainer}>
                        <Button transparent 
                            onPress={()=> this.props.navigation.navigate('Setting')}
                        >
                            <Icon style={styles.close} name='md-close' />
                        </Button>
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
                                        placeholder="Số điện thoại"
                                        onChangeText={(phone) => this.setState({ phone })}
                                    />
                                </Item>
                                <Item style={styles.item}>
                                    <Input
                                        style={styles.input}
                                        placeholder="Mật khẩu"
                                        secureTextEntry={true}
                                        onChangeText={(pass) => this.setState({ pass })}
                                    />
                                </Item>
                            </Col>
                        </Grid>



                        <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                            <Button success
                                style={styles.btnLogin}
                                onPress={() => this.login()}
                            >
                                <Text style={styles.textLogin}>Đăng nhập</Text>
                            </Button>
                            <Button bordered
                                style={styles.btnRegister}
                                onPress={() => this.props.navigation.navigate('Signup')}
                            >
                                <Text style={styles.textRegister}>Đăng kí</Text>
                            </Button>
                        </View>

                        <LoginButton
                             readPermissions={["email"]}
                            onLoginFinished={
                                (error, result) => {
                                    if (error) {
                                        alert("Login failed with error: " + result.error);
                                    } else if (result.isCancelled) {
                                        alert("Login was cancelled");
                                    } else {
                                        this._loginFacebook()
                                    }
                                }
                            }
                            onLogoutFinished={() => alert("User logged out")}/>
                    
                        <Button transparent
                            style={styles.btnTransparent}
                            onPress={() => this.props.navigation.navigate("ForgetPass")}
                        >
                            <Text style={{ color: colors.light }}>Quên mật khẩu ?</Text>
                        </Button>
                        {this.state.loading ?
                            <Loading /> : <View />
                        }

                        {this.state.error ?
                            <Error error={this.state.error} /> : <View />
                        }

                    </View>
                </Content>
            </Container>
        );
    }
}

export default Login;