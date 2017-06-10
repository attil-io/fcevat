import { Angular2FePage } from './app.po';

describe('angular2-fe App', () => {
  let page: Angular2FePage;

  beforeEach(() => {
    page = new Angular2FePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
