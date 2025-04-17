import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSubscriptionChartComponent } from './email-subscription-chart.component';

describe('EmailSubscriptionChartComponent', () => {
  let component: EmailSubscriptionChartComponent;
  let fixture: ComponentFixture<EmailSubscriptionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailSubscriptionChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailSubscriptionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
