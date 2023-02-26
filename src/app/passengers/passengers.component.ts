import { Component, OnInit } from '@angular/core';
import { Passenger } from '../model/passenger.model';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.css']
})
export class PassengersComponent implements OnInit {
  passengers! : Passenger[] ; 
  constructor(private passengerService : PassengerService){

  }
  ngOnInit(): void {
     this.passengerService.listePassenger().subscribe((data)=>{
      this.passengers=data;
      console.log(this.passengers);
      
     })

    }

    deletep(id:number){
      this.passengerService.supprimerPassenger(id).subscribe((data)=>{
        console.log(data);
    this.passengerService.listePassenger().subscribe((data)=>
      {
        this.passengers=data;
        console.log(this.passengers);
   
      });
    });}
  }
