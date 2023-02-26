import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Passenger } from '../model/passenger.model';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-update-passenger',
  templateUrl: './update-passenger.component.html',
  styleUrls: ['./update-passenger.component.css']
})
export class UpdatePassengerComponent implements OnInit {
  currentPassenger = new Passenger();
  constructor(private activatedRoute: ActivatedRoute,
    private passengerService: PassengerService,
    private router:Router) { }
    


  ngOnInit(): void {
    this.passengerService.consulterPassenger(this.activatedRoute.snapshot.params['id']).
 subscribe( pass=>{ this.currentPassenger = pass; } ) ;

  
  }
  updatePassenger() {
    this.passengerService.updatePassenger(this.currentPassenger).subscribe(pass => {
    this.router.navigate(['passengers']); }
    );
    }
    

}
