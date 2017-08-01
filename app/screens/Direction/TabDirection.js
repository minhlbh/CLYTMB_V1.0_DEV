import React, { Component } from "react";
import { TouchableOpacity } from 'react-native';
import {
    Left, Body, Right, Content,
    Text,
    List, ListItem,
    Card, CardItem,
    Thumbnail,
    Icon,
    Button,
    Input,
    Item
} from 'native-base';

class TabDirection extends Component {
    render() {
        return (
            <Content>
                {this.props.tabNum == 1 &&
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={require('../../images/phucdo.jpg')} />
                            </Left>
                            <Body>
                                <Text>Bác sĩ : Do phuc</Text>
                                <Text note>Số 3 ngách 55/51 Hoàng Hoa Thám</Text>
                            </Body>
                            <Right>
                            </Right>
                        </ListItem>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={require('../../images/phucdo.jpg')} />
                            </Left>
                            <Body>
                                <Text>Bác sĩ : Phúc Đỗ</Text>
                                <Text note>Giám đóc bệnh viện chợ rẫy</Text>
                            </Body>
                            <Right>
                            </Right>
                        </ListItem>
                    </List>
                }
                {this.props.tabNum == 2 &&
                    <List>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../../images/Vinmec.png')} />
                            <Body>
                                <Text>Bệnh viện Vinmec Hà Nội</Text>
                                <Text note>Bệnh Viện hàng đầu Việt Nam</Text>
                            </Body>
                        </ListItem>
                    </List>
                }
                 {this.props.tabNum == 3 &&
                    <List>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../../images/Vinmec.png')} />
                            <Body>
                                <Text>Phòng khám Vinmec Hà Nội</Text>
                                <Text note>Phóng khám hàng đầu Việt Nam</Text>
                            </Body>
                        </ListItem>
                    </List>
                }
            </Content>
        );
    }
}
export default TabDirection;