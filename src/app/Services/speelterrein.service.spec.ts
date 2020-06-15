import { TestBed } from '@angular/core/testing';

import { SpeelterreinService } from './speelterrein.service';

describe('SpeelterreinService', () => {
  let service: SpeelterreinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeelterreinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
