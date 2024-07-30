import { TestBed } from '@angular/core/testing';

import { EtudiantDataService } from './etudiant-data.service';

describe('EtudiantDataService', () => {
  let service: EtudiantDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtudiantDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
