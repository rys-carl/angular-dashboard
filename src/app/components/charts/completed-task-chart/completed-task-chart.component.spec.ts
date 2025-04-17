import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTaskChartComponent } from './completed-task-chart.component';

describe('CompletedTaskChartComponent', () => {
  let component: CompletedTaskChartComponent;
  let fixture: ComponentFixture<CompletedTaskChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompletedTaskChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedTaskChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
