import filter from './filter';
import tool from './tool';


function parseExp(exp) {
    if (!exp) {
        return [];
    }
    if (!tool.isString(exp)) {
        throw new Error('The first argument of function parseExp excepts a string');
    }
    return exp.split('.');
}

function getExpData(expArr) {

}

/**
 * 转换数据
 * @param {object|array} swapData - 待转换的数据
 * @param {string} filterArr - filterObj集合
 * @param {object} filterArr[0] - {exp: '待转换的字段', filter: '过滤器名字', args: [] // 过滤器参数，可不传}
 */
export default function (swapData, filterArr) {
    if (!Array.isArray(filterArr)) {
        throw new Error('The second argument must be a array');
    }
    if (tool.isObject(swapData)) {
        for (let [index, filterData] of filterArr.entries()) {

        }
    }
}
