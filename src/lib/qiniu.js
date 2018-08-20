import api from '@utils/api';
import qiniuUploader from '@lib/qiniuUploader';

export default {
    getUploadToken () {
        return new Promise((resolve, reject) => {
            /*let token = wx.getStorageSync('qiniuToken');
            if (token) {
                resolve(token);
                return ;
            }*/
            api.getUploadToken().then(res => {
                if (res.resultCode === '0') {
                    wx.setStorageSync('qiniuToken', res.resultData.token);
                    resolve(res.resultData.token);
                } else {
                    reject('get qiniu token err');
                }
            })
        })
    },
    getUploadUrl () {
        return new Promise((resolve, reject) => {
            /*let domin = wx.getStorageSync('qiniuDomin');
            if (domin) {
                resolve(domin);
                return domin;
            }*/
            api.getUploadUrl().then(res => {
                wx.setStorageSync('qiniuDomin', res);
                resolve(res);
            })
        })
    },
    upload (filePath, domain, token, fn) {
        qiniuUploader.upload(filePath, (res) => {
            fn(res);
            console.log(res);
        }, (err) => {
            console.log('qiniu upload error: ' + err);
        }, {
            region: 'ECN',
            uploadURL: 'https://up.qbox.me', // 华东
            domain: domain,
            uptokenURL: token,
            uptoken: token,
        });
    }
}
