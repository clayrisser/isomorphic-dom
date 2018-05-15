function createWindow() {
  // eslint-disable-next-line no-undef,no-use-before-define
  let browserWindow = window;
  if (!browserWindow) {
    // eslint-disable-next-line no-eval
    const { JSDOM } = eval('require("jsdom")');
    const dom = new JSDOM('');
    browserWindow = dom.window;
  }
  return browserWindow;
}

export const window = createWindow();
export default { window };
