import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Passenger } from '../model/passenger.model';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-passengerverify',
  templateUrl: './passengerverify.component.html',
  styleUrls: ['./passengerverify.component.css']
})
export class PassengerverifyComponent {

  currentPassenger = new Passenger();
  
  
  constructor(private activatedRoute: ActivatedRoute,
    private passengerService: PassengerService,
    private router:Router) { }
    

// 35 jwt
  ngOnInit(): void {
  this.passengerService.consulterPassenger(35).subscribe(data => {
    this.currentPassenger=data;
     }
    );

  
  }
  updatePassenger() {
    this.passengerService.updatePassenger(this.currentPassenger).subscribe(pass => {
    this.router.navigate(['tickets']); }
    );
    }
    







}
