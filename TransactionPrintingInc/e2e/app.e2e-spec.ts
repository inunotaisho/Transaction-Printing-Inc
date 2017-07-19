import { TransactionprintingincPage } from './app.po';

describe('transactionprintinginc App', () => {
  let page: TransactionprintingincPage;

  beforeEach(() => {
    page = new TransactionprintingincPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
