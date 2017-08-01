import React, { Component } from "react";
import { TouchableOpacity ,Image} from 'react-native';
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
import styles from "./styles";
import images from '../../config/images';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           isSearch : false,
        };
    }

    render() {
        return (
            <Container style={styles.container}>
                {!this.state.isSearch ? (
                <Header style={styles.header}>
                    <Left >
                        <Row style={{width: 400}}>
                        <Image  style={styles.logo} source={images.logo} />
                        <Text style={styles.titleHeader}> Cloud y tế Trưởng Khoa</Text>
                        </Row>
                    </Left>
                  
                    <Right >
                        <Button transparent dark 
                            onPress ={() => this.setState({isSearch: true})}
                        >
                            <Icon style={styles.textHeader} name='md-search' />
                        </Button>
                    </Right>
                </Header> 
                ) :(
                <Header style={styles.header} searchBar rounded>
                    <Item style={{backgroundColor: '#FFF'}}>
                        <Icon  name="ios-search" />
                        <Input placeholder="Search" />
                    </Item>
                    <Button transparent
                        onPress ={() => this.setState({isSearch: false})}
                    >
                        <Text style={styles.textHeader}>Cancel</Text>
                    </Button>
                </Header>
                )}

                <Content style={styles.content}>
                    <List>
                        <ListItem itemDivider>
                            <Text style={styles.textDivider}>Tra cứu, nghiên cứu y học</Text>
                        </ListItem>

                        <Card>
                            <CardItem>                      
                              <Icon active name="logo-googleplus" />               
                                <Body>
                                <Text>Bênh A-Z</Text>
                                 <Text note>Tra cứu các loại bênh</Text>
                                 </Body>
                                 <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </CardItem>
                        </Card>

                        <Card>
                            <CardItem>
                                <Icon active name="logo-googleplus" />
                                <Text>Tra cứu thuóc</Text>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </CardItem>
                        </Card>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default Home;