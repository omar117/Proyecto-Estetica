import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD:my-app/src/app/delay.service.spec.ts
import { DelayService } from './delay.service';

describe('DelayService', () => {
  let service: DelayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelayService);
=======
import { AgendaService } from './agenda.service';

describe('AgendaService', () => {
  let service: AgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaService);
>>>>>>> omar:my-app/src/app/auth/services/agenda.service.spec.ts
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
