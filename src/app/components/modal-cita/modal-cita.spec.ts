import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCita } from './modal-cita';

describe('ModalCita', () => {
  let component: ModalCita;
  let fixture: ComponentFixture<ModalCita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCita);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
