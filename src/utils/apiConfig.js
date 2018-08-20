// const env = 'develop';
const env = 'product';

// let baseUrl = 'http://182.150.25.17:8814';
let baseUrl = 'http://10.50.50.218:8814'; // 三胖的地址
let qiniuUrl = 'http://182.150.25.23:8080';
// let payUrl = 'https://wechat.undunion.com';
// let payUrl = 'http://10.50.50.218:8080';
let payUrl = 'http://dev-wechat.undunion.com/orange-wechat';

if (env === 'product') {
    baseUrl = 'https://driver.undunion.com/education';
    qiniuUrl = 'http://10.50.50.218:8814';
    payUrl = 'https://wechat.undunion.com/orange-wechat';
}


export function formatConfig(config) {
    let p = {
        header: {
            'content-type': 'application/json',
            'X-Auth-Token': '1',
            'STORE_ID': '1'
        },
    };
    p.method = (config.method || 'get').toUpperCase();

    p.data = config.data;
    if (config.urlType === 'qiniu') {
        p.url = qiniuUrl + config.url;
    } else if (config.urlType === 'pay') {
        p.url = payUrl + config.url;
    } else {
        p.url = baseUrl + config.url;
    }


    const token = wx.getStorageSync('token') || '';
    const storeId = wx.getStorageSync('storeId') || '';
    if (!config.noToken) {
        p.header['X-Auth-Token'] = token;
    }
    if (!config.noStoreId) {
        p.header['STORE_ID'] = storeId;
    }
    if (config.type === 'ajax') {
        p.header['content-type'] = 'application/x-www-form-urlencoded';
    }
    if (config.source) {
        p.header['SOURCE'] = config.source.toUpperCase();
    }

    return p;
}
