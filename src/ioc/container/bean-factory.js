const Container = require('./container');

class BeanFactory {
  _services = new Array();

  constructor() {
    this._services = Container._services;
  }

  getInstance(name) {
    const found = this._services.filter(s => s.name === name)[0];

    if (found.scope === 'singleton') {
      if (!found.instance) {
        if (found.dependencies.length > 0) {
          let dep = [];
          found.dependencies.forEach((d, index) => {
            dep[index] = this.getInstance(d);
          });
          return (found.instance = new found.service(...dep));
        }
        found.instance = new found.service();
      }
      return found.instance;
    } else {
      if (found.dependencies.length > 0) {
        let dep = [];
        found.dependencies.forEach((d, index) => {
          dep[index] = this.getInstance(d);
        });
        return new found.service(...dep);
      }
      return new found.service();
    }
  }
}

module.exports.BeanFactory = BeanFactory;
