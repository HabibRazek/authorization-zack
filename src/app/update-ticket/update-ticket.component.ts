import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../model/flight.model';
import { Passenger } from '../model/passenger.model';
import { Ticket } from '../model/ticket.model';
import { FlightService } from '../services/flight.service';
import { PassengerService } from '../services/passenger.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {
  tickets!:Ticket[];
  currentTicket = new Ticket();
  updatedPassId! : number;
  updatedFlyId! : number;
  passengers!:Passenger[];
  flights!:Flight[];
  currentPassenger=new Passenger();
  currentFlight = new Flight();
  currentIdflight!:number;
  currentIdpassenger!:number;

  constructor(private activatedRoute: ActivatedRoute,
    private ticketService: TicketService,
    private flightService:FlightService,
    private passengerService:PassengerService,
    private router:Router) { }

  
  
  
  
  ngOnInit(): void {
    
   this.ticketService.listePassenger().subscribe(data => {this.passengers = data;
            console.log(data);
            });
            this.ticketService.listeFlight().subscribe(data => {this.flights = data;
              console.log(data);
              });


            this.ticketService.consulterTicket(this.activatedRoute.snapshot.params['id']).
            subscribe( tic =>{ this.currentTicket= tic; 
            this.updatedPassId = this.currentTicket.passenger.idPassenger;
            } ) ;
            this.ticketService.consulterTicket(this.activatedRoute.snapshot.params['id']).
            subscribe( tic =>{ this.currentTicket= tic; 
            this.updatedPassId = this.currentTicket.passenger.idPassenger;
            this.updatedFlyId = this.currentTicket.flight.idFlight;

            } ) ;




   
  };


  updateTicket() {
    this.currentTicket.passenger = this.passengers.find(cat => cat.idPassenger == this.updatedPassId)!;
    this.currentTicket.flight = this.flights.find(cat => cat.idFlight == this.updatedFlyId)!;

    this.ticketService.updateTicket(this.currentTicket).subscribe(tic => {
    this.router.navigate(['tickets']); }
    );
    }





}
