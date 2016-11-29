import { Ng2AssetTestPage } from './app.po';

describe('ng2-asset-test App', function() {
  let page: Ng2AssetTestPage;

  beforeEach(() => {
    page = new Ng2AssetTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
