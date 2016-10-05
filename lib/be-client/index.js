const Base = require('./base');

let serviceUrl = '';

class Company extends Base {
  constructor() {
    super({
      baseUrl: serviceUrl,
      path: '/companies',
    });
  }
}
class Skill extends Base {
  constructor() {
    super({
      baseUrl: serviceUrl,
      path: '/skills',
    });
  }
}
class Project extends Base {
  constructor() {
    super({
      baseUrl: serviceUrl,
      path: '/projects',
    });
  }
}

function setUrl(url) {
  serviceUrl = url;
}

module.exports = {
  setUrl,
  Project,
  Company,
  Skill,
};
