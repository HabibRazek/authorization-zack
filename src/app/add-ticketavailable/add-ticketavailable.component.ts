import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../model/flight.model';
import { Ticket } from '../model/ticket.model';
import { FlightService } from '../services/flight.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-add-ticketavailable',
  templateUrl: './add-ticketavailable.component.html',
  styleUrls: ['./add-ticketavailable.component.css']
})
export class AddTicketavailableComponent implements OnInit {
constructor(private ticketService:TicketService,private router :Router,

  private flightService:FlightService
  ){}
ticket!:Ticket[];
newTicket = new Ticket();
newIdflight! : number;
newFlight! : Flight;
flights!:Flight[];


  ngOnInit(): void {

    this.ticketService.listeTicket().subscribe((data)=>{
      this.ticket=data;
    console.log(data)
    });
    this.flightService.listeFlight().subscribe((data)=>{
      this.flights=data;
    });
    
  }
 
  AddTicketavailable(){
    this.newTicket.flight = this.flights.find(fly => fly.idFlight == this.newIdflight)!;
    this.ticketService.ajouterTicket(this.newTicket).subscribe(data => {
    console.log(data);
    this.router.navigate(['ticketavailable']);
   
    });
  
  }










}
