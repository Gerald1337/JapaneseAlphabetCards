import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HiraganaTranslationsService {

  private hiraganaTranslationsUrl = 'assets/alphabet/hiragana-translations.json';

  constructor(private http: HttpClient) {}

  getHiraganaTranslations(): Observable<{ [hiragana: string]: string }> {
    return this.http.get<{ [hiragana: string]: string }>(this.hiraganaTranslationsUrl);
  }
}
