class RenderOptions {
  pageTitle;
  mode;
  error;
  message;

  constructor(
    pageTitle,
    mode = undefined,
    error = undefined,
    message = undefined
  ) {
    this.pageTitle = pageTitle;
    this.mode = mode;
    this.error = error;
    this.message = message;
  }
}

module.exports = RenderOptions;
