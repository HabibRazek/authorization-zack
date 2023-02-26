import { Component } from '@angular/core';
import { Airline } from '../model/airline.model';
import { Flight } from '../model/flight.model';
import { Passenger } from '../model/passenger.model';
import { AirlineService } from '../services/airline.service';
import { FlightService } from '../services/flight.service';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {



  passengers!: Passenger[]
  flights!: Flight[];
  airlines!: Airline[];
  count!: number;
  countPassenger! : number;
  countFlight!: number;
  countAirline!:number

  constructor(private passservice:PassengerService,private flyservice:FlightService,
    
    private airservice:AirlineService) { }

  ngOnInit(): void {
    this.passservice.countPassenger().subscribe((data)=>{
      this.countPassenger = data;
    });
    this.flyservice.countFlight().subscribe((data)=>{
      this.countFlight = data;
    });
    this.airservice.countAirline().subscribe((data)=>{
      this.countAirline = data;
      console.log(this.countAirline);
    });
 

  }

}











 
