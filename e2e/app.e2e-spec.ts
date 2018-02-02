import { TomsproductsPage } from './app.po';

describe('tomsproducts App', function() {
  let page: TomsproductsPage;

  beforeEach(() => {
    page = new TomsproductsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
