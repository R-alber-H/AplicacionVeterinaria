import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaHistorial } from './tabla-historial';

describe('TablaHistorial', () => {
  let component: TablaHistorial;
  let fixture: ComponentFixture<TablaHistorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaHistorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaHistorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
