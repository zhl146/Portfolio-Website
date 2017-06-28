import { ZhenLuInfoPage } from './app.po';

describe('zhen-lu-info App', () => {
  let page: ZhenLuInfoPage;

  beforeEach(() => {
    page = new ZhenLuInfoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
