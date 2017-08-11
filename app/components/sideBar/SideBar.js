import React, { Component } from "react";
import { Image } from "react-native";
import {
    Content,
    Text,
    List,
    ListItem,
    Icon,
    Container,
    Left,
    Right,
    Badge,
    Button,
    View,
    StyleProvider,
    getTheme,
    variables,
    Thumbnail
} from "native-base";

import styles from "./styles";

const datas = [
    {
        name: "vienphoi.com",
        images: 'https://sharinglife.blob.core.windows.net/images/file_79b64e5e-9518-4044-9f8c-5bb30f7c08df.png'
    },
    {
        name: 'viennhi.com',
        images: 'https://sharinglife.blob.core.windows.net/images/file_f3400142-32d9-4cde-a6fa-c00c58e8660f.png'
    },
    {
        name: 'vientim.com',
        images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heart_anterior_exterior_view.jpg/1200px-Heart_anterior_exterior_view.jpg'
    },
    {
        name: 'vienk.com',
        images: 'https://sharinglife.blob.core.windows.net/images/file_3776d27a-c91e-4a26-a95c-077e2e61ff0a.png'
    },
    {
        name: "vienphoi.com",
        images: 'https://sharinglife.blob.core.windows.net/images/file_79b64e5e-9518-4044-9f8c-5bb30f7c08df.png'
    },
    {
        name: 'viennhi.com',
        images: 'https://sharinglife.blob.core.windows.net/images/file_f3400142-32d9-4cde-a6fa-c00c58e8660f.png'
    },
    {
        name: 'vientim.com',
        images: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Heart_anterior_exterior_view.jpg/1200px-Heart_anterior_exterior_view.jpg'
    },
    {
        name: 'vienk.com',
        images: 'https://sharinglife.blob.core.windows.net/images/file_3776d27a-c91e-4a26-a95c-077e2e61ff0a.png'
    }
];

class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Content>
                    <Thumbnail source={require('../../images/truongkhoa.png')} style={{ width: 150, height: 150, alignSelf: 'center' }} />
                    <Text style={{ alignSelf: 'center', borderBottomWidth: 1, paddingBottom: 40 }}>Trang chủ</Text>
                    <List
                        dataArray={datas}
                        renderRow={data =>
                            <ListItem button onPress={() => this.props.navigation.navigate()}>
                                <Left>
                                    <Thumbnail active source={{ uri: data.images }} style={{ width: 35, height: 35 }} />
                                    <Text>
                                        {data.name}
                                    </Text>
                                </Left>
                            </ListItem>}
                    />
                </Content>
            </Container>
        );
    }
}

export default SideBar;