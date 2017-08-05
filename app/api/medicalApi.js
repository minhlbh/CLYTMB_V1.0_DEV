import apiUrl from '../config/api';
import postFormBody from './postFormBody';

var medicalApi = {
    getDsBenh(page) {
        var url = `${apiUrl.listBenh}?Trang=${page}&soluongmoitrang=50`;
        return fetch(url).then(res => res.json());
    },
    getSearchResult(key) {
        var url = `${apiUrl.listBenh}?SearchTerm=${key}`;
        return fetch(url).then(res => res.json());
    },
    getDetailBenh(id){
         var url = `${apiUrl.detailBenh}${id}`;
        return fetch(url).then(res => res.json());
    }
}

export default medicalApi;