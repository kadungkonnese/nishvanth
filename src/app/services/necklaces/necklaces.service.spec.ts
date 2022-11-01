import { TestBed } from '@angular/core/testing';

import { NecklacesService } from './necklaces.service';

describe('NecklacesService', () => {
  let service: NecklacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NecklacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
