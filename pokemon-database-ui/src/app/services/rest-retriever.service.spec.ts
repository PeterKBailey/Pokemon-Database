import { TestBed } from '@angular/core/testing';

import { RestRetrieverService } from './rest-retriever.service';

describe('RestRetrieverService', () => {
  let service: RestRetrieverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestRetrieverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
