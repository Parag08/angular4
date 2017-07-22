import { SecondPage } from './app.po';

describe('second App', () => {
  let page: SecondPage;

  beforeEach(() => {
    page = new SecondPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
