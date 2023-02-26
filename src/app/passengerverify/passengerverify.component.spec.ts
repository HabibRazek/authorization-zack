import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerverifyComponent } from './passengerverify.component';

describe('PassengerverifyComponent', () => {
  let component: PassengerverifyComponent;
  let fixture: ComponentFixture<PassengerverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerverifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
