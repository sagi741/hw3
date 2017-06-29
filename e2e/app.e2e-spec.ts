import { Hw3Page } from './app.po';

describe('hw3 App', () => {
  let page: Hw3Page;

  beforeEach(() => {
    page = new Hw3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
