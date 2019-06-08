import { TestBed } from '@angular/core/testing';

import { TecnicService } from './tecnic.service';

describe('TecnicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TecnicService = TestBed.get(TecnicService);
    expect(service).toBeTruthy();
  });
});
