import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { ɵDomSanitizerImpl } from '@angular/platform-browser';

describe('SanitizeHtmlPipe', () => {
  it('create an instance', () => {
    const pipe = new SanitizeHtmlPipe(new ɵDomSanitizerImpl('<p></p>'));
    expect(pipe).toBeTruthy();
  });
});
