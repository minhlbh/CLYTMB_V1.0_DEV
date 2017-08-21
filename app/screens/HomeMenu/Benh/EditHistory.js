import React, { Component } from 'react';
import {
    Container, Header, Content, List, ListItem, Text, Left, Body, Right, Thumbnail, Button
} from 'native-base';
import { colors } from '../../../config/styles';
import { getStyles } from './styles';

const data = [
    {
        name: 'Lê Đức Tiến',
        history: 'đã chỉnh sửa vào lúc 18:47 29/7/2017',
        avatar: 'http://www.unl.edu/careers/images/staff_images/y_u_no_photo_Square.png'
    },
    {
        name: 'Đỗ Thành Phúc',
        history: 'đã chỉnh sửa vào lúc 18:46 25/5/2017',
        avatar: 'https://pbs.twimg.com/profile_images/605082381528096769/gt_sJRot.png'
    },
    {
        name: 'Nguyễn Huy Hiệp',
        history: 'đã chỉnh sửa vào lúc 18:45 23/5/2017',
        avatar: 'http://www.unl.edu/careers/images/staff_images/y_u_no_photo_Square.png'
    },
    {
        name: 'Đinh Ngọc Sơn',
        history: 'đã chỉnh sửa vào lúc 0:47 20/5/2017',
        avatar: 'https://cdn.simplymeasured.com/wp-content/uploads/2016/12/avatar_user_393_1482865711-175x175.jpg'
    },

]

class EditHistory extends Component {
    render() {
        let styles = getStyles(colors);
        return (
            <Container>
                <Content>
                    {data.map((item) =>
                        <List>
                            <ListItem avatar>
                                <Left>
                                    <Thumbnail source={{ uri: item.avatar }} />
                                </Left>
                                <Body>
                                    <Text>{item.name}</Text>
                                    <Text note>{item.history}</Text>
                                    <Button style={styles.button2}>
                                        <Text> Xem nội dung chỉnh sửa</Text>
                                    </Button>
                                </Body>
                            </ListItem>
                        </List>
                    )}
                </Content>
            </Container>
        )
    }
}
export default EditHistory;