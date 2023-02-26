import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airline } from '../model/airline.model';
import { AirlineService } from '../services/airline.service';
import { Flight } from '../model/flight.model';
import { FlightService } from '../services/flight.service';
@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {
  flights!:Flight[]
  currentFlight = new Flight();
  updatedAirId! : number;
  airlines! :Airline[];
currentAirline = new Airline(); 
currentIdairline! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private flightService: FlightService,
    private router:Router) { }

    ngOnInit(): void {
      this.flightService.listeAirline().subscribe(data => {this.airlines = data;
        console.log(data);
        });


      this.flightService.consulterFlight(this.activatedRoute.snapshot.params['id']).
      subscribe( tic =>{ this.currentFlight= tic; 
      this.updatedAirId = this.currentFlight.airline.idAirline;
      } ) ;
    }
    updateFlight() {
      this.currentFlight.airline = this.airlines.find(cat => cat.idAirline == this.updatedAirId)!;
      this.flightService.updateFlight(this.currentFlight).subscribe(fly => {
      this.router.navigate(['flights']); }
      );
      }
    }
