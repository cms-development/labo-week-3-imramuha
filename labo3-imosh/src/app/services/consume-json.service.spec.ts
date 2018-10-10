import { TestBed, inject } from '@angular/core/testing';

import { ConsumeJsonService } from './consume-json.service';

describe('ConsumeJsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsumeJsonService]
    });
  });

  it('should be created', inject([ConsumeJsonService], (service: ConsumeJsonService) => {
    expect(service).toBeTruthy();
  }));
});
