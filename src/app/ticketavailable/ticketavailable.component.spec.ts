import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketavailableComponent } from './ticketavailable.component';

describe('TicketavailableComponent', () => {
  let component: TicketavailableComponent;
  let fixture: ComponentFixture<TicketavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketavailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
