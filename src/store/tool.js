import { getStore } from 'wepy-redux';
import { showTip } from '@actions/index';

const store = getStore();


export default {
    showTip (tip) {
        store.dispatch(showTip(tip))
    }
}
