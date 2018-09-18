const Base = require('./base');
module.exports = class extends Base {
    async loginAction() {
        let {usernum, password} = this.post();
        const salt = 'weekly';
        password = think.md5(salt + password);
        try {
            let user = await this.model('user').where({
                usernum,
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
           console.log(this.user,'22222222222222222222222222');
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
