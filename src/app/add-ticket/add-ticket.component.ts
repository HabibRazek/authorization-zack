import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../model/flight.model';
import { Passenger } from '../model/passenger.model';
import { TicketService } from '../services/ticket.service';
import {Ticket}from '../model/ticket.model';
import { FlightService } from '../services/flight.service';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {
  idPassenger!:number;
  idFlight!:number;
  newTicket=new Ticket;
  passengers! : Passenger[];
  flights!:Flight[];
  newIdpassenger! : number;
  newIdflight! : number;
  newPassenger! : Passenger;
  newFlight! : Flight;
  tickets!:Ticket[];

  constructor(private ticketService: TicketService,
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
      }


      AddTicket(){
        this.newTicket.flight = this.flights.find(fly => fly.idFlight == this.newIdflight)!;
        this.newTicket.passenger = this.passengers.find(cat => cat.idPassenger == this.newIdpassenger)!;

        this.ticketService.ajouterTicket(this.newTicket).subscribe(data => {
        console.log(data);
        this.router.navigate(['ticketavailable']);
       
        });
      
      }

  }




