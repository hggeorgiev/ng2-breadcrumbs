import { TestBed, async, inject } from '@angular/core/testing';

import { ArticleResolver } from './arcticle-resolver.guard';

describe('ArticleResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArticleResolver]
    });
  });

  it('should ...', inject([ArticleResolver], (guard: ArticleResolver) => {
    expect(guard).toBeTruthy();
  }));
});
