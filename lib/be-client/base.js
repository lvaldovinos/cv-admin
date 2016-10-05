const request = require('superagent');

class Base {
  constructor(opts) {
    this.baseUrl = opts.baseUrl;
    this.path = opts.path;
  }
  getMethod(opts) {
    return request[opts.method](`${this.baseUrl}${this.path}${opts.extraPath}`);
  }
  get(extraPath) {
    return this.getMethod({
      method: 'get',
      extraPath,
    });
  }
  post(extraPath) {
    return this.getMethod({
      method: 'post',
      extraPath,
    });
  }
  del(extraPath) {
    return this.getMethod({
      method: 'del',
      extraPath,
    });
  }
  put(extraPath) {
    return this.getMethod({
      method: 'put',
      extraPath,
    });
  }
}

module.exports = Base;
