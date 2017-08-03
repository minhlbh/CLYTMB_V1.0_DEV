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
import styles from './styles';
import Error from '../../components/error';
import accountApi from '../../api/accountApi';

class ForgetPass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            error: '',
            mess: '',
            idU: ''
        };
    }

    forgotPass = () => {
        var phone = this.state.phone;
        if (phone) {
            accountApi.forgotPassword(phone).then(res => {
                if (res.IdU) {
                    this.props.navigation.navigate("ConfirmFP", {
                        idU: res.IdU,
                        mess: res.mess,
                        phone: this.state.phone,
                    });
                } else {
                    this.setState({ error: "Số điện thoại không tồn tại." })
                }
            });
        } else {
            this.setState({ error: "Bạn chưa nhập số điện thoại." })
        }
    }
    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon style={styles.textHeader} name="ios-arrow-back" />
                        </Button >
                    </Left>
                    <Body>
                        <Title style={styles.textHeader}>Quên mật khẩu</Title>
                    </Body>
                    <Right />
                </Header>

                <Content style={styles.content}>
                    <Text style={styles.textContent}>
                        Nhập số điện thoại
                     </Text>
                    <Form style={styles.form}>
                        <Item regular>
                            <Input
                                style={{ textAlign: 'center' }}
                                placeholder=""
                                placeholderTextColor="#999"
                                onChangeText={(phone) => this.setState({ phone })}
                                keyboardType="number-pad"
                                returnKeyType={'done'}
                                autoFocus={true}
                            />
                        </Item>

                        <Button block info
                            style={styles.btn}
                            onPress={() =>
                                this.forgotPass()}
                        >
                            <Text>Lấy lại mật khẩu</Text>
                        </Button>
                        {this.state.error ?
                            <Error error={this.state.error} /> : <View />
                        }
                    </Form>
                </Content>
            </Container>
        )
    }
}

export default ForgetPass;