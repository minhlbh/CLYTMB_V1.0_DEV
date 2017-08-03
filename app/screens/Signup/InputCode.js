import React, { Component } from "react";
import {
    Container,
    Header,
    Title,
    Content,
    Text,
    Button,
    Icon,
    Left,
    Right,
    Body,
    Form,
    Item,
    Label,
    Input,
    View
} from "native-base";
import styles from "./styles";
import accountApi from '../../api/accountApi';

class InputCode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            error: ''
        }
    }
    confirm = () => {
        accountApi.confirmPhone(this.props.navigation.state.params.idU, this.state.code, this.props.navigation.state.params.phone).then(res => {
            alert(
                res)
        }).catch((error) => {
            console.log(error)
        });

    }
    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header} >
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon style={styles.textHeader} name="ios-arrow-back" />
                        </Button >
                    </Left>

                    <Body>
                        <Title style={styles.textHeader}>Xác thực</Title>
                    </Body>

                    <Right />
                </Header>
                <Content>
                    <View style={styles.contentContainer}>
                        <Text
                            style={{ textAlign: 'center', color: '#666', fontSize: 16, margin: 35 }}>
                            Một tin nhắn chứa mã xác thực đã gửi đến só điện thoại của bạn.
                         </Text>
                        <Form style={styles.form}>

                            <Item regular>

                                <Input
                                    style={{ textAlign: 'center' }}
                                    placeholder="Nhập mã xác thực"
                                    placeholderTextColor="#999"
                                    onChangeText={(code) => this.setState({ code })}
                                    keyboardType="number-pad"
                                    returnKeyType={'done'}
                                />
                            </Item>

                            <Button block info
                                style={styles.btn}
                                onPress={() =>
                                    this.confirm()}
                            >
                                <Text>Tiếp tục</Text>
                            </Button>

                        </Form>
                        <Button transparent
                            style={styles.btnTransparent}
                        >
                            <Text style={styles.textHeader}>Gửi lại mã xác thực</Text>
                        </Button>
                    </View>
                </Content>

            </Container>
        );
    }
}

export default InputCode;