const Base = require('./base');
module.exports = class extends Base {
    async loginAction() {
        let {username, password} = this.post();
        const salt = 'structure';
        password = think.md5(salt + password);
        console.log(password,'323333333333333333333333333333333')
        try {
            let user = await this.model('user').where({
                username,
            }).find();
            if(user.password && user.password == password) {
                // login success
                await this.session('userInfo',user);
                return this.success("登陆成功");
            } else {
                return this.fail("用户名或密码错误")
            }
        }
        catch(e) {
            console.log(e);
            return this.fail("登录失败")
        }
    }
    async queryuserAction() {
        try {
            this.user = {
                username: this.user.username
                // password: this.user.password
            }
            return this.success(this.user);
        } catch(e) {
            console.log(e);
            return this.fail(e);
        }
    }
    async logoutAction() {
        try {
            await this.session(null);
            return this.success("登出成功");
        } catch(e) {
            return this.fail(`登出失败${e}`)
        }
    }

}
