import { TestBed } from '@angular/core/testing';

import { InMemoryDataService } from './in-memory-data.service';

//方式四 在方式三基础上
describe('InMemoryDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InMemoryDataService = TestBed.get(InMemoryDataService);
    expect(service).toBeTruthy();
  });
});
