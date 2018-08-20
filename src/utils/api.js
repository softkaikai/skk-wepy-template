import wepy from 'wepy';

const source = 'wechat';
export default {
    loginByOpenId (data) {
        return wepy.request({
            source: source,
            method: 'post',
            data: data,
            url: '/wechat/student/a/loginByOpenId',
            type: 'ajax',
            noToken: true,
            noStoreId: true,
        })
    },
    sendVerifyCode (data) {
        return wepy.request({
            source: source,
            method: 'post',
            data: data,
            url: '/wechat/student/a/sendVerifyCode',
            type: 'ajax',
            noToken: true,
            noStoreId: true,
        })
    },
    sendChangeVerifyCode (data) {
        return wepy.request({
            source: source,
            method: 'post',
            data: data,
            url: '/wechat/student/a/sendChangeVerifyCode',
            type: 'ajax',
            noToken: true,
            noStoreId: true,
        })
    },
    login (data) {
        return wepy.request({
            source: source,
            method: 'post',
            data: data,
            url: '/wechat/student/a/login',
            type: 'ajax',
            noToken: true,
            noStoreId: true,
        })
    },
    // 学员课程查询
    getCourse (data) {
        return wepy.request({
            source: source,
            method: 'get',
            data: data,
            url: '/wechat/studentCourse/query',
        })
    },
    getCourseById (data) {
        return wepy.request({
            source: source,
            method: 'get',
            data: data,
            url: '/wechat/exam/queryByCourseId',
        })
    },
    // 查询课程详情信息
    courseFindOne (data) {
        return wepy.request({
            source: source,
            method: 'get',
            data: data,
            url: '/wechat/course/findOne',
        })
    },
    getUploadToken () {
        return wepy.request({
            source: source,
            method: 'get',
            noStoreId: false,
            // urlType: 'qiniu',
            // url: '/orange-firm/qiniu/getUploadToken.do',
            url: '/firm/qiniu/getUploadToken.do',
        })
    },
    getUploadUrl () {
        return wepy.request({
            source: source,
            method: 'get',
            noStoreId: false,
            // urlType: 'qiniu',
            // url: '/orange-firm/qiniu/getUploadUrl.do',
            url: '/firm/qiniu/getUploadUrl.do',
        })
    },
    addCourseOrder (data) {
        return wepy.request({
            source: source,
            method: 'post',
            data: data,
            url: '/wechat/courseOrder/addOrder',
        })
    },
    unifiedCourseOrder (data) {
        /*return wepy.request({
            urlType: 'pay',
            method: 'post',
            data: data,
            // url: '/orange-wechat/wxPay/unifiedCourseOrder',
            url: '/wxPay/unifiedCourseOrder',
            type: 'ajax'
        })*/
        return wepy.request({
            source: source,
            method: 'post',
            data: data,
            url: '/wechat/wxPay/unifiedCourseOrder',
            type: 'ajax'
        })
    },
    updateOrderStatus (data) {
        return wepy.request({
            source: source,
            method: 'post',
            data: data,
            url: '/wechat/courseOrder/updateOrderStatusByNoFee',

        })
    },
    // 查询学员排名
    getStudentRanking (data) {
        return wepy.request({
            source: source,
            method: 'get',
            data: data,
            url: '/wechat/student/getStudentRanking',
        })
    },
    // 根据条件查询学员每次考试信息
    studentExamQuery (data) {
        return wepy.request({
            source: source,
            method: 'get',
            data: data,
            url: '/wechat/studentExam/query',
        })
    },

    // 根据条件查询学员每次考试信息
    queryWithoutPage (data) {
        return wepy.request({
            source: source,
            method: 'get',
            data: data,
            url: '/wechat/studentExam/queryWithoutPage',
        })
    },

    // 根据条件查询学员每次考试信息
    studentExamFindOne (data) {
        return wepy.request({
            source: source,
            method: 'get',
            data: data,
            url: '/wechat/studentExam/findOne',
        })
    },

    // 添加每次考试情况
    addStudentExam (data) {
        return wepy.request({
            source: source,
            method: 'post',
            data: data,
            url: '/wechat/studentExam/addStudentExam',
        })
    },

    // 查询学员考试排名
    getStudentExamRanking (data) {
        return wepy.request({
            source: source,
            method: 'get',
            data: data,
            url: '/wechat/studentExam/getStudentExamRanking',
        })
    },

    // 查询学员考试排名详情
    getStudentExamRankingInfo (data) {
        return wepy.request({
            source: source,
            method: 'get',
            data: data,
            url: '/wechat/studentExam/getStudentExamRankingInfo',
        })
    },

    // 根据条件查询学员每次考试信息
    getStudentExamRanking (data) {
        return wepy.request({
            source: source,
            method: 'get',
            data: data,
            url: '/wechat/studentExam/getStudentExamRanking',
        })
    },

    // 手机验证码校验
    checkStudent (data) {
        return wepy.request({
            source: source,
            method: 'post',
            data: data,
            url: '/wechat/student/checkStudent',
            type: 'ajax',
        })
    },
    addStudentStudy (data) {
        return wepy.request({
            source: source,
            method: 'post',
            data: data,
            url: '/wechat/studentStudy/addStudentStudy',
        })
    },

    // 修改学员电话
    editStudentTelephone (data) {
        return wepy.request({
            source: source,
            method: 'post',
            data: data,
            url: '/wechat/student/editStudentTelephone',
            type: 'ajax',
        })
    },
    getMiniappOpenid (data) {
        return wepy.request({
            urlType: 'pay',
            method: 'get',
            data: data,
            url: '/orange-wechat/wxPay/getMiniappOpenid',
            type: 'ajax',
        })
    },

}
