import { EventEmitter } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';

export class MockTranslateService {
  onLangChange: EventEmitter<any> = new EventEmitter();
  onTranslationChange: EventEmitter<any> = new EventEmitter();
  onDefaultLangChange: EventEmitter<any> = new EventEmitter();

  setDefaultLang(lang: string): void {
    return;
  }

  use(lang: string): Observable<any> {
    return observableOf(lang);
  }

  addLangs(langs: Array<string>): void {
    return;
  }

  get(key: string | Array<string>, interpolateParams?: Object): Observable<string | any> {
    return observableOf(key);
  }
}
