import React, { Component } from 'react';
import { TouchableHighlight } from 'react-native';
import { LoginButton, ShareDialog } from 'react-native-fbsdk';
import {
    Container, Header, Left, Body, Right, Content, List, ListItem,
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
        const shareLinkContent = {
            contentType: 'link',
            contentUrl: 'https://www.facebook.com/',
        };
        this.state = {
            detail: [],
        },
            { shareLinkContent: shareLinkContent, };
        medicalApi.getDetailBenh(this.props.id).then(res => {
            this.setState({
                detail: res,
            })
        });
    }
    shareLinkWithShareDialog() {
        var tmp = this;
        ShareDialog.canShow(this.state.shareLinkContent).then(
            function (canShow) {
                if (canShow) {
                    return ShareDialog.show(tmp.state.shareLinkContent);
                }
            }
        ).then(
            function (result) {
                if (result.isCancelled) {
                    alert('Share cancelled');
                } else {
                    alert('Share success with postId: ' + result.postId);
                }
            },
            function (error) {
                alert('Share fail with error: ' + error);
            }
            );
    }
    rederDuLieu(LoaiDuLieu, Dulieu, LinkAnh) {
        let styles = getStyles(colors);
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
        let styles = getStyles(colors);
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
                    <View style={{ marginTop: 30 }}>
                        <Button full
                            style={styles.button}>
                            <Icon name='md-flag' />
                            <Text>Report phá hoại</Text>
                        </Button>
                        <Button full
                            style={styles.button}>
                            <Icon name='md-alarm' />
                            <Text>Đặt lịch khám</Text>
                        </Button>
                        <Button full
                            style={styles.button}>
                            <Icon name='md-add' />
                            <Text>Theo dõi</Text>
                        </Button>
                        {/* <Button full
                            style={styles.button}>
                            <Icon name='logo-facebook' />
                            <Text>Share Facebook</Text>
                        </Button> */}
                        <LoginButton full
                            style={styles.button}
                            publishPermissions={["publish_actions"]}
                            onLoginFinished={
                                (error, result) => {
                                    if (error) {
                                        alert("Đăng nhập lỗi: " + error.message);
                                    } else if (result.isCancelled) {
                                        alert("Dừng đăng nhập");
                                    } else {
                                        alert("Đăng nhập thành công với quyền: " + result.grantedPermissions)
                                    }
                                }
                            }
                            onLogoutFinished={() => alert("Bạn đã đăng xuất")}>
                            </LoginButton>

                        <TouchableHighlight onPress={this.shareLinkWithShareDialog.bind(this)}>
                            <Text style={styles.shareText}>Share</Text>
                        </TouchableHighlight>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default InfoBenh;
