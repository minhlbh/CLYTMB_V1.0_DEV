import React, { Component } from 'react';
import {
    Container, Header, Left, Button, Title, Right, Icon, Content, Text, View, Card, CardItem, Thumbnail,
} from 'native-base';
import styles from './styles';

export default class AboutUs extends Component {
    render() {
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent
                            onPress={() => { this.props.navigation.navigate('Setting') }}>
                            <Icon name='arrow-back'
                                style={{ color: 'black' }} />
                        </Button>
                    </Left>
                    <Title style={styles.textHeader}>Về chúng tôi</Title>
                    <Right />
                </Header>
                <Content>
                    <View style={styles.panel}>
                    <Card>
                        <Thumbnail source={require('../../../../images/truongkhoa.png')}
                            style={{ width: 200, height: 200, alignSelf:'center', marginBottom:20 }} />
                        <Text style={styles.textInput}>Cloud y tế cung cấp môi trường miễn phí (xuất phát từ ~ 50 apps cơ bản-> từ điển bệnh, chẩn đoán hình ảnh, hội chẩn trực tuyến, sổ y bạ điện tử, bệnh án điện tử... , 1 loại máy Bác sĩ có thể phần nào thay thế công việc của Bác sĩ, y tá, và các nhân viên y tế...) để các Bác sĩ có điều kiện tốt hơn khi hành nghề y phục vụ bệnh nhân.</Text>
                        <Text style={styles.textInput}>Sau cùng, mục tiêu của hệ thống đối với người bệnh là cung cấp thông tin khám chữa tin cậy, kinh nghiệm của người bệnh chia sẻ cho nhau để từ đó họ ra quyết định chữa trị được phù hợp, kịp thời. Hệ thống lưu trữ lại bệnh sử đầy đủ, và giúp người bệnh tiếp cận nhanh hơn với các dịch vụ y tế!</Text>
                        <Text style={styles.textInput}>Hệ thống xây dựng theo kiến trúc mở.... Vừa xây dựng mới, Bác sỹ vừa dùng hệ thống, vừa nâng cấp chỉnh sửa.</Text>
                        <Text style={styles.textInput}>Mỗi hệ thống xây dựng được trình bầy và thảo luận, nhận các ý kiến đóng góp trên địa chỉ http://idea.truongkhoa.com</Text>
                        <Text style={styles.textInput}>Hệ thống sản phẩm chạy trên địa chỉ http://truongkhoa.com http://truongkhoa.vn</Text>
                        <Text style={styles.textInput}>Các hệ thống chuyên khoa chạy trên hàng chục tên miền khác : http://vienk.com http://vienk.vn http://viennhi.com http://viennhi.vn http://vientim.com http://vienphusan.com ...</Text>
                    </Card>
                    </View>
                    <Button full
                    style={styles.button}>
                        <Text>Liên hệ với chúng tôi</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}