import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";
import {I18NEXT_SERVICE, ITranslationService} from "angular-i18next";
import {LANGUAGES} from "../config/languages";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  actionsToolbar = false;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  // rtl = false;
  language = 'en';
  languages: any[] = LANGUAGES
    // [
  //   {code: 'en', name: 'English'},
  //   {code: 'nl', name: 'Nederland'},
  //   {code: 'he', name: 'עברית', rtl: true},
  //   {code: 'fa', name: 'فارسی', rtl: true}
  // ];

  /** Whether the widget is in RTL mode or not. */
  // private isRtl: boolean;

  /** Subscription to the Directionality change EventEmitter. */
  // private _dirChangeSubscription = Subscription.EMPTY;

  // ngOnDestroy() {
  //   // this._dirChangeSubscription.unsubscribe();
  // }

  constructor(
    // dir: Directionality,
    private breakpointObserver: BreakpointObserver,
    @Inject(I18NEXT_SERVICE) public i18NextService: ITranslationService,
    // @Inject(DOCUMENT) private document: Document
  ) {
    // console.log(dir.value);
    // this.isRtl = dir.value === 'rtl';

    // this._dirChangeSubscription = dir.change.subscribe(() => {
    //   console.log('flipDirection')
    //   // this.flipDirection();
    // });
  }

  // flipDirection() {}

  ngOnInit (){
    this.i18NextService.events.initialized.subscribe((e) => {
      console.log(e)
      if (e) {
        this.language = this.i18NextService.language;
        // this.updateState(this.i18NextService.language);
      }
    });
    // this.i18NextService.events.languageChanged.subscribe(e => console.log(e))
  }
  toggleToolbarActions() {
    this.actionsToolbar = !this.actionsToolbar;
  }

  changeLanguage(lang: string): void {
    console.log(lang, this.i18NextService.language);
    if (lang !== this.i18NextService.language) {
      this.i18NextService.changeLanguage(lang).then(() => {
        this.language = lang;
        // this.updateState(this.i18NextService.language);
        document.location.reload();
      });
    }
  }
  // private updateState(lang: string): void {
  //   // this.document.documentElement.lang = lang;
  //   // this.document.documentElement.dir = this.languages.filter(language => lang === language.code)[0]?.rtl ? 'rtl' : 'ltr'; // lang;
  //   // this.rtl = this.languages.filter(language => lang === language.code)[0]?.rtl;
  //   this.language = lang;
  // }
}
