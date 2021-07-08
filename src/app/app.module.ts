import {APP_INITIALIZER, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
// import {registerLocaleData} from "@angular/common";
import {
  defaultInterpolationFormat,
  I18NEXT_SERVICE,
  I18NextModule,
  I18NextTitle,
  ITranslationService
} from "angular-i18next";
// import en from '@angular/common/locales/en';
// import nl from '@angular/common/locales/nl';
// import he from '@angular/common/locales/he';
// import fa from '@angular/common/locales/fa';
import HttpApi from 'i18next-http-backend';

import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector';
import {AuthModule} from "./auth/auth.module";
// import {BidiModule} from "@angular/cdk/bidi";
import {LANGUAGES_WHITELIST, registerLocale} from "./config/languages";

registerLocale();
// registerLocaleData(en);
// registerLocaleData(nl);
// registerLocaleData(he);
// registerLocaleData(fa);

// tslint:disable-next-line:typedef
export function appInit(i18next: ITranslationService) {
  return () =>
    i18next
      .use(HttpApi)
      .use(I18nextBrowserLanguageDetector)
      .init({
        whitelist: LANGUAGES_WHITELIST, //['en', 'nl', 'he', 'fa'],
        fallbackLng: 'en',
        debug: true,
        returnEmptyString: false,
        ns: [
          'translation'
        ],
        interpolation: {
          format: I18NextModule.interpolationFormat(defaultInterpolationFormat)
        },
        backend: {
          loadPath: 'assets/locales/{{lng}}/{{ns}}.json',
        },
        // lang detection plugin options
        detection: {
          // order and from where user language should be detected
          // order: ['querystring', 'cookie'],
          order: ['cookie'],
          // keys or params to lookup language from
          lookupCookie: 'lang',
          // lookupQuerystring: 'lng',
          // cache user language on
          caches: ['localStorage', 'cookie'],
          // optional expire and domain for set cookie
          cookieMinutes: 10080, // 7 days
        }
      });
}

export function localeIdFactory(i18next: ITranslationService): any  {
  return i18next.language;
}
export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true
  },
  {
    provide: Title,
    useClass: I18NextTitle
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory
  }
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    I18NextModule.forRoot(),
    AuthModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [
    I18N_PROVIDERS,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
