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

class TabBookmark extends Component {
    render() {
        return (
            <Container padder>
                <Content>
                    {(this.props.tabNum == 1 || this.props.tabNum == 2) &&
                        <List>
                            <ListItem itemDivider>
                                <Text>Bệnh</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Amip</Text>
                                {this.props.isDelete &&
                                <Right>
                                    <Icon active name="trash" />
                                </Right>
                                }
                            </ListItem>
                            <ListItem>
                                <Text>Bệnh sốt xuất huyết</Text>
                                {this.props.isDelete &&
                                <Right>
                                    <Icon active name="trash" />
                                </Right>
                                }
                            </ListItem>
                        </List>
                    }

                    {(this.props.tabNum == 1 || this.props.tabNum == 3) &&
                        <List>
                            <ListItem itemDivider>
                                <Text>Thuốc</Text>
                            </ListItem>
                            <ListItem>
                                <Text>Thuốc kháng sinh</Text>
                                {this.props.isDelete &&
                                <Right>
                                    <Icon active name="trash" />
                                </Right>
                                }
                            </ListItem>
                            <ListItem>
                                <Text>Thuốc giảm đau</Text>
                            </ListItem>
                        </List>
                    }

                    {(this.props.tabNum == 1 || this.props.tabNum == 4) &&
                        <List>
                            <ListItem itemDivider>
                                <Text>Chỉ dẫn</Text>
                            </ListItem>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={require('../../images/phucdo.jpg')} />
                                </Left>
                                <Body>
                                    <Text>Bác sĩ : Đỗ Thành Phúc</Text>
                                    <Text note>Số 3 ngách 55/51 Hoàng Hoa Thám</Text>
                                </Body>
                                <Right>
                                </Right>
                            </ListItem>
                        </List>
                    }
                    {(this.props.tabNum == 1 || this.props.tabNum == 5) &&
                        <List>
                            <ListItem itemDivider>
                                <Text>Tin tức</Text>
                            </ListItem>
                            <ListItem>
                                <Thumbnail square size={80} source={require('../../images/path.jpg')} />
                                <Body>
                                    <Text>Phòng chống bệnh sốt xuất huyết</Text>
                                    <Text note>Các lời khuyên để phòng chống bệnh sốt xuất huyết</Text>
                                </Body>
                            </ListItem>
                        </List>
                    }
                </Content>
            </Container>
        );
    }
}

export default TabBookmark;