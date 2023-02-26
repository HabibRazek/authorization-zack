import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../model/flight.model';
import { Passenger } from '../model/passenger.model';
import { Ticket } from '../model/ticket.model';
import { FlightService } from '../services/flight.service';
import { PassengerService } from '../services/passenger.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-buy-ticket',
  templateUrl: './buy-ticket.component.html',
  styleUrls: ['./buy-ticket.component.css']
})
export class BuyTicketComponent implements OnInit {
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
  newTicket=new Ticket;
  newIdpassenger! : number;
  newIdflight! : number;

  
  constructor(private activatedRoute: ActivatedRoute,
    private ticketService: TicketService,
    private flightService:FlightService,
    private passengerService:PassengerService,
    private router:Router) { }
    ngOnInit(): void {
    
      this.ticketService.listeTicket().subscribe((data)=>{
        this.tickets=data;
      console.log(data)
      });
       this.flightService.listeFlight().subscribe((data)=>{
        this.flights=data;
      });
      this.passengerService.listePassenger().subscribe((data)=>{
        this.passengers=data;
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







      }
      


      AddTicket(){
        this.currentTicket.passenger = this.passengers.find(cat => cat.idPassenger == this.updatedPassId)!;
        this.currentTicket.flight = this.flights.find(cat => cat.idFlight == this.updatedFlyId)!;
    

        this.ticketService.ajouterTicket(this.newTicket).subscribe(data => {
        console.log(data);
        this.router.navigate(['tickets']);
       
        });
      
      }

  }



