import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengersComponent } from './passengers/passengers.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePassengerComponent } from './update-passenger/update-passenger.component';
import { AirlinesComponent } from './airlines/airlines.component';
import { AddAirlineComponent } from './add-airline/add-airline.component';
import { UpdateAirlineComponent } from './update-airline/update-airline.component';
import { FlightsComponent } from './flights/flights.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { RechercheParDestinationComponent } from './recherche-par-destination/recherche-par-destination.component';
import { BuyTicketComponent } from './buy-ticket/buy-ticket.component';
import { PassengerverifyComponent } from './passengerverify/passengerverify.component';
import { AddTicketavailableComponent } from './add-ticketavailable/add-ticketavailable.component';
import { TicketavailableComponent } from './ticketavailable/ticketavailable.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { LoginComponent } from './login/login.component';





@NgModule({
  declarations: [
    AppComponent,
    PassengersComponent,
    AddPassengerComponent,
    UpdatePassengerComponent,
    AirlinesComponent,
    AddAirlineComponent,
    UpdateAirlineComponent,
    FlightsComponent,
    AddFlightComponent,
    UpdateFlightComponent,
    TicketsComponent,
    AddTicketComponent,
    UpdateTicketComponent,
    RechercheParDestinationComponent,
    BuyTicketComponent,
    PassengerverifyComponent,
    AddTicketavailableComponent,
    TicketavailableComponent,
    DashboardComponent,
    LoginpageComponent,
    ConnexionComponent,
    SearchFilterPipe,
    LoginComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
