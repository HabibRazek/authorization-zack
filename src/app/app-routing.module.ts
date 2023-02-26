import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { FlightsComponent } from './flights/flights.component';
import { PassengersComponent } from './passengers/passengers.component';
import { UpdateAirlineComponent } from './update-airline/update-airline.component';
import { UpdatePassengerComponent } from './update-passenger/update-passenger.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { RechercheParDestinationComponent } from './recherche-par-destination/recherche-par-destination.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { PassengerverifyComponent } from './passengerverify/passengerverify.component';
import { TicketavailableComponent } from './ticketavailable/ticketavailable.component';
import { AddTicketavailableComponent } from './add-ticketavailable/add-ticketavailable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ConnexionComponent } from './connexion/connexion.component';



const routes: Routes = [
  {path: "passengers", component : PassengersComponent},
  {path: "add-passenger", component : AddPassengerComponent},
  { path: "", redirectTo: "passengers", pathMatch: "full" },
  {path: "updatepassenger/:id", component: UpdatePassengerComponent},
  {path:"airlines",component:AirlinesComponent},
  {path:"add-airlines",component:AddAirlineComponent},
  {path: "updateairline/:id", component: UpdateAirlineComponent},
  {path: "flights", component : FlightsComponent},
  {path:"add-flights",component:AddFlightComponent},
  {path: "updateflight/:id", component: UpdateFlightComponent},
  {path: "tickets", component : TicketsComponent},
  {path:"add-tickets",component:AddTicketComponent},
  {path:"updateticket/:id",component:UpdateTicketComponent},
  {path: "rechercheParDestination", component : RechercheParDestinationComponent},
  {path:"buy-ticket" , component:BuyTicketComponent},
 { path:"passengerverify",component:PassengerverifyComponent},
 {path:"ticketavailable/:id",component:TicketavailableComponent},
 {path:"add-ticketavailable",component:AddTicketavailableComponent},
{path:"dashboard",component:DashboardComponent},
{path:"loginpage",component:LoginpageComponent},
{path:"connexion",component:ConnexionComponent},
{path:"login",component:LoginpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
