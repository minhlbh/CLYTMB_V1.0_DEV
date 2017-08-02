import React, { Component } from "react";
import {
    Container, Header, Left, Body, Right, Content,
    Text, Title,
    Icon,
    Button,
    Input,
    Item,
    Grid,
    Col, Row,
    View
} from 'native-base';
import styles from "./styles";
import accountApi from '../../api/accountApi';
import Error from '../../components/error';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            pass: '',
            confirmPass: '',
            error: '',
        }
    }
    signup = () => {
        var na = this.state.name;
        var em = this.state.email;
        var p = this.state.phone;
        var pa = this.state.pass;
        var cpa = this.state.confirmPass;
        //this.setState({ animating: true });
        accountApi.signUp(na, em, p, pa, cpa).then(res => {
            console.log(res)
            if (!res.Id) {
                this.setState({ error: res });
                //this.setState({ animating: false });
            } else {
                console.log(res)
                this.props.navigation.navigate("InputCode", {
                    idU: res.Id,
                    phone: res.Phone
                });
                //this.setState({ animating: false });
            }
        });
    }

    render() {
        return (
            <Container style={styles.container}>
                {/* START HEADER*/}
                <Header style={styles.header}>
                    <Left>
                        <Button transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon style={styles.textHeader}
                                name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.textHeader}>Đăng kí</Title>
                    </Body>
                    <Right />
                </Header>
                {/*END HEADER  */}

                {/*START BODY  */}
                <Content style={styles.content}>
                    <Grid>
                        <Col size={1}>
                            <Row><Icon style={styles.icon} name='md-contact' /></Row>
                            <Row><Icon style={styles.icon} name='md-mail' /></Row>
                            <Row><Icon style={styles.icon} name='md-call' /></Row>
                            <Row><Icon style={styles.icon} name='md-lock' /></Row>
                            <Row><Icon style={styles.icon} name='md-lock' /></Row>
                        </Col>
                        <Col size={7}>
                            <Item style={styles.item}>
                                <Input
                                    style={styles.input}
                                    placeholder='Họ và tên'
                                    onChangeText={(name) => this.setState({ name })}
                                />
                            </Item>
                            <Item style={styles.item}>
                                <Input
                                    style={styles.input}
                                    placeholder='Email'
                                    onChangeText={(email) => this.setState({ email })}
                                />
                            </Item>
                            <Item style={styles.item}>
                                <Input
                                    style={styles.input}
                                    placeholder='Số điện thoại'
                                    onChangeText={(phone) => this.setState({ phone })}
                                />
                            </Item>
                            <Item style={styles.item}>
                                <Input
                                    style={styles.input}
                                    placeholder='Mật khẩu'
                                    secureTextEntry={true}
                                    onChangeText={(pass) => this.setState({ pass })}
                                />
                            </Item>
                            <Item style={styles.item}>
                                <Input
                                    style={styles.input}
                                    placeholder='Nhập lại mật khẩu'
                                    secureTextEntry={true}
                                    onChangeText={(confirmPass) => this.setState({ confirmPass })}
                                />
                            </Item>
                        </Col>
                    </Grid>
                    <Button block style={styles.btn}
                        onPress={() => this.signup()}
                    >
                        <Text>Đăng kí</Text>
                    </Button>

                    {this.state.error ?
                        <Error error={this.state.error}/>
                        : <View ><Row ></Row></View>
                    }
                </Content>
                {/* END BODY  */}
            </Container>
        );
    }
}
export default Signup;