import { TraVAppPage } from './app.po';

describe('tra-vapp App', () => {
  let page: TraVAppPage;

  beforeEach(() => {
    page = new TraVAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
