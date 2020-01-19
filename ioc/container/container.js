module.exports = class Container {
  static _services = new Array();

  static register(name, service, scope = 'singleton', dependencies = []) {
    const _service = {
      name,
      service,
      dependencies,
      scope
    };

    this._services.push(_service);
  }
};
