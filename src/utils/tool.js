import resolvePathname from 'resolve-pathname';


export default {
    appId: '',

    pageLoadingTime: 500,

    isObject (data) {
        return Object.prototype.toString.call(data) === '[object Object]';
    },
    isString (data) {
        return Object.prototype.toString.call(data) === '[object String]';
    },

    /**
     * 跳转页面
     * @param {string} url - 跳转路由，可以是相对路径，也可以是绝对路径，如果type=back，则url必须是一个数字
     * @param {string} type - 跳转路由类型，默认为最优跳转方式以保证页面栈最小, 可选replace，reLaunch, to, back
     * @returns {boolean}
     */
    jumpPage (url, type) {
        const pages = getCurrentPages();
        const routes = pages.map(page => {return page.route});
        if (type === 'replace') {
            wx.redirectTo({url});
            return true;
        } else if (type === 'reLaunch') {
            wx.reLaunch({url});
            return true;
        } else if (type === 'switch') {
            wx.switchTab({url});
            return true;
        } else if (type === 'to') {
            wx.navigateTo({url});
            return true;
        } else if (type === 'back') {
            if (typeof url !== 'number') {
                throw new Error('The first argument must be a number if type equals back');
            }
            wx.navigateBack({delta: url});
            return true;
        }

        const currentPageRoute = this.getCurrentPageRoute();
        let absoluteUrl = resolvePathname(url, currentPageRoute);
        const currentPageIndex = routes.indexOf(absoluteUrl.slice(1));
        if (currentPageIndex !== -1) {
            wx.navigateBack({delta: routes.length - currentPageIndex - 1});
        } else {
            wx.navigateTo({url})
        }
    },

    getCurrentPageRoute () {
        const pages = getCurrentPages();

        return pages[pages.length - 1].route;
    },

    /**
     * 正则表达式
     */
    regExp: {
        telephone: /^1\d{10}$/,
        idCard15: /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/,
        idCard18: /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$/,
        idCard: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
        email: /(^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+$)|(^$)/,
        zsNumber: /(^[1-9])+\d*$/,
        floatNumber: /^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/,
        userName: /^([\u4e00-\u9fa5]{2,20}|[a-zA-Z\.\s]{2,40})$/,
        nickName: /^[a-zA-Z0-9_\-\u4e00-\u9fa5]{4,16}$/
    },

    formValidate (obj) {
        let validata
        for (let v = 0; v < obj.length; v++) {
            validata = this._validate(obj[v]);
            if (!validata.valid) {
                break;
            }
        }
        return validata;
    },

    _validate (obj) {
        let value = obj.value,
            emptyTips = obj.emptyTips,
            regTips = obj.regTips || emptyTips,
            errorTips = obj.errorTips,
            regName = obj.regName,
            ajaxValid = obj.ajaxValid,
            ajaxTips = obj.ajaxTips,
            maxNum = obj.maxNum || 0,
            minNum = obj.minNum || 0,
            minlength = obj.minlength,
            eqLength = obj.eqLength,
            minDateTime = obj.minDateTime,
            minDate = obj.minDate,
            minTime = obj.minTime;
        //为空验证
        if (regName != 'email' && typeof value !== 'number' && emptyTips != '路桥费' &&
            (value === '' ||
                value === '0' ||
                value === undefined)) {
            return {valid: false, msg: emptyTips}
        } else {
            if (regName && regName != 'idCard' && !this.regExp[regName].test(value)) {
                return {valid: false, msg: regTips}
            }

            if (regName == 'idCard') {
                let idCardValidate = this.checkIdCard(value)
                if (!idCardValidate.valid) {
                    return idCardValidate
                }
            }

            //最小长度
            if (minlength != undefined) {
                if (value.length < minlength) {
                    return {valid: false, msg: errorTips}
                }
            }

            //长度
            if (eqLength != undefined) {
                if (value.length != eqLength) {
                    return {valid: false, msg: errorTips}
                }
            }

            //最大值检查
            if (maxNum) {
                if (+value > +maxNum) {
                    return {valid: false, msg: errorTips}
                }
            }

            //最小值检查
            if (minNum) {
                if (+value < +minNum) {
                    return {valid: false, msg: errorTips}
                }
            }

            return {valid: true};
        }
    },

    loading (content) {
        wx.showLoading({
            title: content || '加载中...',
            mask: true
        })
    },

    hideLoading () {
        wx.hideLoading();
    },

    delayHideLoading () {
        setTimeout(() => {
            wx.hideLoading();
        }, this.pageLoadingTime)
    },

    video: ['flv','mpg','mpeg','avi','wmv','mov','asf','rm','rmvb','mkv','m4v','mp4'],
    word: ['doc','xls','ppt','pdf','docx','xlsx','pptx'],
    img: ['jpg','png','bmp'],
    judgeFile (url) {
        for (let word of this.word) {
            if (url.indexOf('.' + word) > -1) {
                return 'word'
            }
        }
        for (let img of this.img) {
            if (url.indexOf('.' + img) > -1) {
                return 'img'
            }
        }

        return 'video';
    }
}
