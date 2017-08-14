import React, {
    Component
} from 'react';
import PushNotification from 'react-native-push-notification';

export default class PushController extends Component {
    componentDidMount() {
        PushNotification.configure({
            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function(token) {
                console.log( 'TOKEN:', token );
            },
            // (required) Called when a remote or local notification is opened or received
            onNotification: function (notification) {
                console.log('NOTIFICATION:', notification);
            },
            senderID: "12345",

            popInitialNotification: true,
            
            requestPermissions: true,
        })
    }
    render() {
        return null;
    }
}