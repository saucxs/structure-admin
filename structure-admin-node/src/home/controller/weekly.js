'use strict'
const Base = require('./base');
module.exports = class extends Base {
  async addWeeklyAction() {
    let { content, date } = this.post();
    let usernum = this.user.usernum;
    try {
      let row = await this.model('week').add({usernum, content, date});
      console.log(row, 'row')
      return this.success(row);
    } catch(e) {
      return this.fail('服务器开小差');
    }
  }
}
