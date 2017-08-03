const domain = 'http://api.truongkhoa.com/';

var apiUrl = {
    menu : `${domain}api/Center/Home_Detail`,
    login: `${domain}token`,
    signUp: `${domain}api/Account/Register`,
    confirmPhone: `${domain}api/Account/XacNhanPhone`,
    forgotPassword: `${domain}api/Account/ForgotPassword`,
    listBenh: `${domain}api/CSDLYT/Benh_List`,
    detailBenh: `${domain}api/CSDLYT/Benh_Detail?Id=`,
}

export default apiUrl;