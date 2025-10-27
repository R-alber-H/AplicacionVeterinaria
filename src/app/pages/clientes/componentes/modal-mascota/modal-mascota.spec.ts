import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMascota } from './modal-mascota';

describe('ModalMascota', () => {
  let component: ModalMascota;
  let fixture: ComponentFixture<ModalMascota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalMascota]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMascota);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
