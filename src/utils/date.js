export default {
    formateDate (date) {
        let tmpDate;
        if (date) {
            if (date instanceof Date) {
                tmpDate = date;
            } else {
                if (String(date).match(/-/)) {
                    date = String(date).replace(/-/g, '/');
                }
                tmpDate = new Date(date);
            }
        } else {
            tmpDate = new Date();
        }
        return tmpDate;
    },
    getCurrentTime (dateFormat) {
        var date = new Date();
        if (dateFormat) {
            date = dateFormat;
        }
        var seperator1 = '-';
        var seperator2 = ':';
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        var hours = date.getHours();
        var mins = date.getMinutes();
        var secs = date.getSeconds();
        if (month >= 1 && month <= 9) {
            month = '0' + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = '0' + strDate;
        }
        if (hours >= 0 && hours <= 9) {
            hours = '0' + hours;
        }
        if (mins >= 0 && mins <= 9) {
            mins = '0' + mins;
        }
        if (secs >= 0 && secs <= 9) {
            secs = '0' + secs;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + ' ' + hours + seperator2 + mins
            + seperator2 + secs;
        return currentdate;
    },
    compare (date1, date2) {
        date1 = this.formateDate(date1);
        date2 = this.formateDate(date2);
        let ms1 = date1.getTime();
        let ms2 = date2.getTime();

        if (ms1 < ms2) {
            return '<';
        } else if (ms1 === ms2) {
            return '=';
        } else {
            return '>';
        }
    },
}
