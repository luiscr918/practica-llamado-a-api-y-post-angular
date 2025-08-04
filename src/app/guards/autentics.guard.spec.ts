import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { autenticsGuard } from './autentics.guard';

describe('autenticsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => autenticsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
