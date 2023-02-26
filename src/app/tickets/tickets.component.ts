import { Component, OnInit  } from '@angular/core';
import { Ticket } from '../model/ticket.model';
import { TicketService } from '../services/ticket.service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
  tickets!:Ticket[];
  constructor(private ticketService: TicketService){}

  ngOnInit(): void {

    this.ticketService.listeTicket().subscribe((data)=>{
      this.tickets=data;
      console.log(this.tickets);
    });


  }


  deletet(id:number){
    this.ticketService.supprimerTicket(id).subscribe((data)=>{
      console.log(data);
  this.ticketService.listeTicket().subscribe((data)=>
    {
      this.tickets=data;
      console.log(this.tickets);

    });
  });}


}
