import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../model/flight.model';
import { FlightService } from '../services/flight.service';
import { Airline } from '../model/airline.model';
@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
  newFlight=new Flight;


  airlines! : Airline[]; 
  newIdairline! : number;
  newAirline! : Airline;



  constructor(private flightService: FlightService,
    private router:Router) { }

  ngOnInit(): void {
    
      this.flightService.listeAirline().subscribe(cats => {this.airlines = cats;
      console.log(cats);
      });

  }

  addFlight(){
    this.newFlight.airline = this.airlines.find(cat => cat.idAirline == this.newIdairline)!;
    this.flightService.ajouterFlight(this.newFlight).subscribe(fly => {
    console.log(fly);
    this.router.navigate(['flights']);
    });
    }
    
  
    


}
