module.exports = {
    timeStr: function (time) {
        var minute = 0;
        var second = 0;
        if (time) {
            second = time % 60;
            minute = Math.floor(time / 60);
        }
        console.log('minute', minute, 'second', second);
        return (minute === 0) ? (second + '秒') : (minute + '分' + second + '秒');
    },
    questionType: function (type) {
        var typeTrans = '';
        if (type === 'radio') {
            typeTrans = '单选题';
        }
        else if (type === 'checkbox') {
            typeTrans = '多选题';
        }
        else if (type === 'judge') {
            typeTrans = '判断题';
        }
        else {
            typeTrans = '未知题';
        }
        return typeTrans;
    },
    numToAlp: function (type) {
        var AlpType = '';
        if (type === 1) {
            AlpType = 'A';
        }
        else if (type === 2) {
            AlpType = 'B';
        }
        else if (type === 3) {
            AlpType = 'C';
        }
        else if (type === 4) {
            AlpType = 'D';
        }
        else if (type === 5) {
            AlpType = 'E';
        }
        else if (type === 6) {
            AlpType = 'F';
        }
        else if (type === 7) {
            AlpType = 'G';
        }
        return AlpType;
    },
    sToMinute: function (type) {
        var numType = '';
        type = Number(type);
        if (type) {
            numType = (type / 60).toFixed(2);
        } else {
            numType = 0;
        }
        return numType;
    }
};
