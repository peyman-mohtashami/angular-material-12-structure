import en from '@angular/common/locales/en';
import nl from '@angular/common/locales/nl';
import he from '@angular/common/locales/he';
import fa from '@angular/common/locales/fa';
import {registerLocaleData} from "@angular/common";

export const LANGUAGES: any[] = [
  {code: 'en', name: 'English'},
  {code: 'nl', name: 'Nederland'},
  {code: 'he', name: 'עברית', rtl: true},
  {code: 'fa', name: 'فارسی', rtl: true}
];

export const registerLocale = () => {
  registerLocaleData(en);
  registerLocaleData(nl);
  registerLocaleData(he);
  registerLocaleData(fa);
}

export const LANGUAGES_WHITELIST = LANGUAGES.map(language => language.code);

