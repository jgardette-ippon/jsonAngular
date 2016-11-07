import { JsonAngularPage } from './app.po';

describe('json-angular App', function() {
  let page: JsonAngularPage;

  beforeEach(() => {
    page = new JsonAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
