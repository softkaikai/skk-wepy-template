export default class Qrcode {
    constructor (opts) {
        this.defaultOptions = {
            text: '获取验证码',
            reText: '重新获取',
            time: 60,
            canGetQrCode: true,
        };
        this.opts = Object.assign({}, this.defaultOptions, opts);
        this.text = this.opts.text;
        this.timer = null;
        this.updateData = null;
        // this.scopeIns = null;
    }
    start () {

        if (!this.opts.canGetQrCode) {
            return false;
        }
        clearInterval(this.timer);

        let time = this.opts.time || 60;

        this.opts.canGetQrCode = false;
        this.update(time + 's');
        this.timer = setInterval(() => {
            time--;
            this.update(time + 's');

            if (time <= 0) {
                this.end();
            }
        }, 1000);
    }
    end () {
        this.update(this.opts.reText);
        this.opts.canGetQrCode = true;
        this.clear();
    }
    update (data) {
        this.text = data;
        if (typeof this.updateData === 'function') {
            this.updateData();
        }
    }
    clear () {
        clearInterval(this.timer);
        this.timer = null;
    }
}
