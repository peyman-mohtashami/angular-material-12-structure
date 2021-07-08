import {Component, Inject} from '@angular/core';
import {I18NEXT_SERVICE, ITranslationService} from "angular-i18next";
import {DOCUMENT} from "@angular/common";
import {LANGUAGES} from "./config/languages";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    @Inject(I18NEXT_SERVICE) public i18NextService: ITranslationService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.i18NextService.events.initialized.subscribe((e) => {
      if (e) {
        this.document.documentElement.lang = this.i18NextService.language;
        this.document.documentElement.dir = LANGUAGES
          .filter(language => this.i18NextService.language === language.code)[0]?.rtl ? 'rtl' : 'ltr';
        // this.updateState(this.i18NextService.language);
      }
    });
    // this.i18NextService.events.languageChanged.subscribe(e => {
    //   console.log(e);
    //   this.document.documentElement.lang = this.i18NextService.language;
    //   this.document.documentElement.dir = this.languages
    //     .filter(language => this.i18NextService.language === language.code)[0]?.rtl ? 'rtl' : 'ltr';
    //
    // })
  }
}
