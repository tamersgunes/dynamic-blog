import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  switchTheme(theme: string, favicon: string) {
    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    const faviconLink = this.document.getElementById('favicon-by-theme') as HTMLLinkElement;

    console.log(themeLink)
    console.log("new: " + theme)
    if (themeLink) {
      themeLink.href = theme + '.css';
    }
    if (faviconLink) {
      faviconLink.href = 'assets/' + favicon + '.ico';
    }
  }
}
