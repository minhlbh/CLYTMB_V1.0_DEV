import React, { Component } from "react";
import {
    Container, Header, Left, Body, Right, Content,
    Text, Title,
    Icon,
    Button,
    Input,
    Item,
} from 'native-base';
import styles from "./styles";

class Signup extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Đăng kí</Title>
                    </Body>
                    <Right />
                </Header>
                <Content style={styles.content}>
                    <Item style={styles.input}>
                        <Icon active name='md-contact' />
                        <Input
                            placeholder='Họ và tên'
                        />
                    </Item>
                    <Item style={styles.input}>
                        <Icon active name='md-mail' />
                        <Input
                            placeholder='Email'
                        />
                    </Item>
                    <Item  style={styles.input}>
                        <Icon active name='md-call' />
                        <Input
                            placeholder='Số điện thoại'
                        />
                    </Item>
                    <Item  style={styles.input}>
                        <Icon active name='md-lock' />
                        <Input
                            placeholder='Mật khẩu'
                            secureTextEntry={true}
                        />
                    </Item>
                    <Item  style={styles.input}>
                        <Icon active name='md-lock' />
                        <Input
                            placeholder='Nhập lại mật khẩu'
                            secureTextEntry={true}
                        />
                    </Item>
                    <Button block style={styles.btn}>
                        <Text>Đăng kí</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
export default Signup;