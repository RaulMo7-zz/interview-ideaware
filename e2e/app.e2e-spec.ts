import { InterviewProjectRmPage } from './app.po';

describe('interview-project-rm App', function() {
  let page: InterviewProjectRmPage;

  beforeEach(() => {
    page = new InterviewProjectRmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
