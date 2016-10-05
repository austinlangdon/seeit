import { Seeit2Page } from './app.po';

describe('seeit2 App', function() {
  let page: Seeit2Page;

  beforeEach(() => {
    page = new Seeit2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
