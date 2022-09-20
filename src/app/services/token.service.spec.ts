import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';

describe('TokenService', () => {
  let service: TokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenService);
  });
  afterEach(()=>{
    service.deleteToken();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Guarda y recupera el Token', () => {
    const testToken = "Test Token"
    service.saveToken(testToken)
    expect(service.getToken()).toEqual(testToken);
  });

  it('', () => {
    expect(service).toBeTruthy();
  });
  it('Borra el Token', () => {
    const testToken = "Test Token"
    service.saveToken(testToken)
    service.deleteToken();
    expect(service.getToken()).toEqual(null);
  });
});
