import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from '../model/passenger.model';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-add-passenger',
  templateUrl: './add-passenger.component.html',
  styleUrls: ['./add-passenger.component.css']
})
export class AddPassengerComponent implements OnInit{
  newPassenger = new Passenger();
  constructor(private passengerService: PassengerService,
    private router:Router) { }
  ngOnInit(): void {
    
      }
      AddPassenger(){
        this.passengerService.ajouterPassenger(this.newPassenger).subscribe(pass => {
        console.log(pass);
        this.router.navigate(['passengers']);
        });


  }}


