import tool from '@utils/tool';
import api from '@utils/api';


export default class Page {
    /**
     * 分页构造函数
     * @param {Object} options - 配置
     * @param {Object} options.search - 搜索条件
     * @param {String} options.pageApi - 分页接口
     */
    constructor(options) {
        this.search = Object.assign({
            pageNo: 0,
            pageSize: 5
        }, options.search);
        this.canPull = true;
        this.pageApi = options.pageApi;
        this.totalPage = 0;
    }
    onPullingUp() {
        return new Promise((resolve, reject) => {
            if(this.search.pageNo === 0){
                this.loadPageList(resolve, reject)
            }else{
                setTimeout(()=>{
                    this.loadPageList(resolve, reject)
                }, 200)
            }
        })
    }
    configSearch(search) {
        this.search = Object.assign({
            pageNo: 0,
            pageSize: 5
        }, search);
    }
    rePull() {
        this.search.pageNo = 0;
        this.onPullingUp();
    }
    loadPageList(resolve, reject) {
        if(this.search.pageNo && this.search.pageNo >= this.totalPage){
            this.canPull = true;
            resolve([]);
            return
        }
        let onPullDownRefresh = wx.getStorageSync('onPullDownRefresh');
        if (!onPullDownRefresh) {
            tool.loading();
        }

        api[this.pageApi](this.search).then(data => {
            if (!onPullDownRefresh) {
                setTimeout(() => {
                    tool.hideLoading();
                    this.canPull = true;
                }, tool.pageLoadingTime);
                wx.setStorageSync('onPullDownRefresh', '');
            }

            wx.stopPullDownRefresh();

            if(data.resultCode === '0') {
                if(data.resultData.content) {
                    this.totalPage = data.resultData.totalPages;
                    if(this.search.pageNo === 0 || this.search.pageNo < this.totalPage){
                        this.search.pageNo++
                    }
                    resolve(data.resultData.content);
                } else {
                    resolve([]);
                }
            } else {
                reject(data.resultMsg);
            }
        })
    }
}
