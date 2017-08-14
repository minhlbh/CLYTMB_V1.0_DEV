import React, { Component } from "react";
import { TouchableOpacity, Image, FlatList } from 'react-native';
import {
    Container, Header, Left, Body, Right, Content,
    Text,
    List, ListItem,
    Card, CardItem,
    Thumbnail,
    Icon,
    Button,
    Input,
    Item,
    Row
} from 'native-base';
console.disableYellowBox = true;
import {getStyles} from "./styles";
import images from '../../config/images';
import homeApi from '../../api/homeApi';
import Loading from '../../components/loading';
import { setColors , colors} from '../../config/styles';
import {setLogo} from '../../config/images';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearch: false,
            menu: [],
            menuSave: [],
            loading: true,
            setting: []
        };
    }

    componentWillMount() {
        var url = '';
        if(this.props.navigation.state.params) {
            url = this.props.navigation.state.params.url;
          }
        homeApi.getMenu(url).then(res => {
            setColors(res.setting.MauDam,res.setting.MauNhat);
            setLogo(res.setting.Logo);
            this.setState({
                menuSave: res.home,
                menu: res.home,
                loading: false,
                setting: res.setting,
            });
            
        }).catch(error => {
            console.log(error);
        })
    }

    replaceHtml(content) {
        var html = ['<p>', '</p>', '<br>']
        if (content == null) {
            return '';
        } else {
            for (i = 0; i < html.length; i++) {
                content = content.replace(html[i], '');
            }
            return content;
        }

    }

    search(key) {
        key = key.toLowerCase();
        if (!key || key === null) {
            this.setState({ menu: this.state.menuSave })
        } else {
            var menu = [], items = [];
            for (i = 0; i < this.state.menuSave.length; i++) {
                var item = this.state.menuSave[i].items;
                for (j = 0; j < item.length; j++) {
                    if (item[j].Ten.toLowerCase().indexOf(key) > -1 || item[j].tomtat.toLowerCase().indexOf(key) > -1) {
                        items.push(item[j]);
                    }
                }
            }
            menu.push({ Ten: "Kết quả tìm kiếm của bạn ", items })
            this.setState({ menu: menu })
        }
    }

    toEtc(content, limit) {
        var i = 0;
        if (content.length < limit) {
            return content;
        } else {
            for (j = limit; j < content.length; j++) {
                if (content.charAt(j) == ' ') {
                    i = j;
                    break;
                }
            }
            if (i == 0) {
                return content;
            } else {
                content = content.replace(content.substring(i, content.length), '...');
                return content;
            }
        }

    }
    render() {
        let styles = getStyles(colors);
        return (
            <Container style={styles.container}>
                {!this.state.isSearch ? (
                    <Header style={styles.header}>
                        <Left>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                                <Thumbnail square source={{ uri: this.state.setting.Logo }}
                                    style={styles.icon} />
                            </TouchableOpacity>
                        </Left>
                        <Text style={styles.titleHeader}> {this.state.setting.ThuongHieu}</Text>
                        <Right >
                            <Button transparent dark
                                onPress={() => this.setState({ isSearch: true })}
                            >
                                <Icon style={styles.textHeader} name='md-search' />
                            </Button>
                        </Right>
                    </Header>
                ) : (
                        <Header style={styles.header} searchBar rounded>
                            <Item >
                                <Icon name="ios-search" />
                                <Input placeholder="Nhập từ khoá"
                                    onChangeText={(key) => {
                                        this.search(key)
                                    }}
                                    autoFocus={this.state.isSearch}
                                />
                            </Item>
                            <Button transparent
                                onPress={() => this.setState({ isSearch: false, menu: this.state.menuSave })}
                            >
                                <Text style={[styles.textHeader,{color: colors.dark}]}>Cancel</Text>
                            </Button>
                        </Header>
                    )}

                <Content style={styles.content}>
                    {this.state.loading &&
                        <Loading />
                    }

                    {this.state.menu.map((listMenu) => (
                        <Card>
                            <CardItem >
                                <Text style={styles.textDividerTitle}>{listMenu.Ten}</Text>
                                <Right>
                                    <Text note style={styles.textDivider}>{listMenu.items.length} apps</Text>
                                </Right>
                            </CardItem>
                            <FlatList
                                data={listMenu.items}
                                renderItem={({ item }) =>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate(item.url)}
                                    >
                                        <CardItem>
                                            <Image style={styles.itemImage} source={{ uri: item.Images[0] }} />
                                            <Body>
                                                <Text style={{color: colors.light}}>
                                                    {this.toEtc(item.Ten, 29)}
                                                </Text>
                                                <Text note>{this.toEtc(this.replaceHtml(item.tomtat), 95)}</Text>
                                            </Body>
                                        </CardItem>
                                    </TouchableOpacity>
                                }
                            />
                        </Card>
                    ))}
                </Content>
            </Container>
        );
    }
}

export default Home;