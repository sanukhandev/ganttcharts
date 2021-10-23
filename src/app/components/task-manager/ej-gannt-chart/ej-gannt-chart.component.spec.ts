import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjGanntChartComponent } from './ej-gannt-chart.component';

describe('EjGanntChartComponent', () => {
  let component: EjGanntChartComponent;
  let fixture: ComponentFixture<EjGanntChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjGanntChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjGanntChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
