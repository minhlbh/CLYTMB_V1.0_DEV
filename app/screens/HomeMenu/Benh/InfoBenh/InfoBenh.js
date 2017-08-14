import React, { Component } from 'react';

import {
    Container, Header, Left, Body, Right, Content,
    Text,
    Title,
    Tabs,
    Tab,
    Button,
    Icon,
    Card,
    CardItem,
    View,
    H3
} from 'native-base';
import { FlatList, Image, WebView, Linking } from 'react-native';
import medicalApi from '../../../../api/medicalApi';
import { getStyles } from "./styles";
import HTMLView from 'react-native-htmlview';
import { colors } from '../../../../config/styles';

class OpenURLButton extends React.Component {
    static propTypes = {
        url: React.PropTypes.string,
    };

    handleClick = () => {
        Linking.canOpenURL(this.props.url).then(supported => {
            if (supported) {
                Linking.openURL(this.props.url);
            } else {
                console.log('Don\'t know how to open URI: ' + this.props.url);
            }
        });
    };

    render() {
        let styles = getStyles(colors);
        return (
            <Button transparent light
                onPress={this.handleClick}>
                >
            <Text style={styles.text}>Open {this.props.url}</Text>
            </Button>
        );
    }
}


class InfoBenh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: [],
        };
        medicalApi.getDetailBenh(this.props.id).then(res => {
            this.setState({
                detail: res,
            })
        });
    }
    rederDuLieu(LoaiDuLieu, Dulieu, LinkAnh) {
        switch (LoaiDuLieu) {
            case 1: return (
                <HTMLView
                    value={Dulieu}
                />
            )
                break;
            case 2: return (
                <Image
                    style={styles.image}
                    source={{ uri: LinkAnh + Dulieu }}
                />
            )
                break;
            case 5: return (<WebView
                source={{
                    html: '<iframe width="345" height="230"src="'
                    + Dulieu.replace('https://youtu.be', 'https://www.youtube.com/embed')
                    + '"></iframe>'
                }}
                style={styles.video}
            />
            )
                break;
            default:
                return <View />;
                break;
        };
    }


    render() {
        const detail = this.state.detail;
        return (
            <Container>
                <Content style={styles.content}>
                    <HTMLView
                        value={detail.TomTat}
                    />
                    {!detail.DsPhanTu ? <View /> :
                        detail.DsPhanTu.map((listContent) => (
                            <View style={styles.phantuContainer}>
                                <H3 style={{ marginBottom: 5 }}>{listContent.Ten}</H3>
                                {listContent.NoiDung.DsDuLieuNoiDung.map((DuLieuNoiDung) => (
                                    <View>
                                        {this.rederDuLieu(DuLieuNoiDung.LoaiDuLieu, DuLieuNoiDung.Dulieu, detail.LinkAnh)}
                                        <Text>{DuLieuNoiDung.TieuDe}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}

                </Content>
            </Container>
        )
    }
}

export default InfoBenh;
