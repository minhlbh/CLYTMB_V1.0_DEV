import apiUrl from '../config/api';
import postFormBody from './postFormBody';

var drugApi = {
    getDsThuoc(page) {
        var url = `${apiUrl.listThuoc}?Trang=${page}&soluongmoitrang=50`;
        return fetch(url).then(res => res.json());
    },
    getSearchResult(key) {
        var url = `${apiUrl.listThuoc}?SearchTerm=${key}`;
        return fetch(url).then(res => res.json());
    },
}
export default drugApi;