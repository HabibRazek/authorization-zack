import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketavailableComponent } from './add-ticketavailable.component';

describe('AddTicketavailableComponent', () => {
  let component: AddTicketavailableComponent;
  let fixture: ComponentFixture<AddTicketavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTicketavailableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTicketavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
