import wepy from 'wepy';

import tool from '@utils/tool'

export default class TestMixin extends wepy.mixin {
    methods = {
        jumpPage(...args) {
            tool.jumpPage(...args);
        }
    }
    jumpPage(...args) {
        tool.jumpPage(...args);
    }
}
