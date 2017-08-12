import apiUrl from '../config/api';
import { AsyncStorage } from "react-native";
import postFormBody from './postFormBody';

var homeApi = {
    getMenu(page) {
        var url = `${apiUrl.menu}${page}`;
        return fetch(url).then(res => res.json());
    },
}

export default homeApi;