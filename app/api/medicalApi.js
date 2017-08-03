import apiUrl from '../config/api';
import postFormBody from './postFormBody';

var medicalApi = {
    getDsBenh(page) {
        var url = `${apiUrl.listBenh}?Trang=${page}`;
        return fetch(url).then(res => res.json());
    },
}

export default medicalApi;