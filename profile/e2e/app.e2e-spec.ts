import { ProfilePage } from './app.po';

describe('profile App', () => {
  let page: ProfilePage;

  beforeEach(() => {
    page = new ProfilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
