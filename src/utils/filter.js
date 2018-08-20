export default {
    price (type) {
        let number;
        if (price || Number(price) === 0) {
            switch (type) {
                case 'normal':
                    number = '¥' + (+price).toFixed(2)
                    break;
                case 'yuanren':
                    number = (+price).toFixed(2) + '元/人'
                    break;
                case 'yuan':
                    number = (+price).toFixed(2) + '元';
                    break;
                default:
                    number = (+price).toFixed(2);
            }
        }
        return number;
    },
    questionType (str) {
       let type = '';
       if (str === 'radio') {
            type = '单选题';
        } else if (str === 'checkbox') {
            type = '多选题';
        } else if (str === 'judge') {
            type = '判断题';
        } else {
            type = '其他题';
        }
        return type;
    },
    optionsNum (num) {
        let code = '';
        if (num === 0) {
            code = 'A';
        } else if (num === 1) {
            code = 'B';
        } else if (num === 2) {
            code = 'C';
        } else if (num === 3) {
            code = 'D';
        } else if (num === 4) {
            code = 'E';
        } else if (num === 5) {
            code = 'F';
        } else if (num === 6) {
            code = 'G';
        } else if (num === 7) {
            code = 'H';
        } else if (num === 8) {
            code = 'I';
        }
        return code;
    }
}
