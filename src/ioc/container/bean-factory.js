const Container = require('./container');

class BeanFactory {
  static _services = Container._services;

  constructor() {}

  static getInstance(name) {
    const found = this._services.filter(s => s.name === name)[0];

    if (found.scope === 'singleton') {
      if (!found.instance) {
        if (found.dependencies.length > 0) {
          const dependencies = getDependencies(found);
          found.instance = new found.service(...dependencies);
          return found.instance;
        }
        found.instance = new found.service();
      }
      return found.instance;
    } else {
      if (found.dependencies.length > 0) {
        const dependencies = getDependencies(found);
        return new found.service(...dependencies);
      }
      return new found.service();
    }
  }
}

const getDependencies = service => {
  let dependencies = [];
  service.dependencies.forEach((d, index) => {
    dependencies[index] = BeanFactory.getInstance(d);
  });
  return dependencies;
};

module.exports = BeanFactory;
