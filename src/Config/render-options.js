class RenderOptions {
  pageTitle;
  mode;
  error;
  message;

  constructor(pageTitle, mode = null, error = null, message = null) {
    this.pageTitle = pageTitle;
    this.mode = mode;
    this.error = error;
    this.message = message;
  }
}

exports = {
  RenderOptions
};
