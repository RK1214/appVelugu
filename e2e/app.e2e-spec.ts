import { AppVeluguPage } from './app.po';

describe('app-velugu App', () => {
  let page: AppVeluguPage;

  beforeEach(() => {
    page = new AppVeluguPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
