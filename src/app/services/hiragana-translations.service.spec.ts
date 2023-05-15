import { TestBed } from '@angular/core/testing';

import { HiraganaTranslationsService } from './hiragana-translations.service';

describe('HiraganaTranslationsService', () => {
  let service: HiraganaTranslationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiraganaTranslationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
