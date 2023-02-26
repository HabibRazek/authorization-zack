import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Flight } from '../model/flight.model';
import { Passenger } from '../model/passenger.model';
import { Ticket } from '../model/ticket.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root' 
})
export class TicketService {
  apiURL: string = 'http://localhost:8888/passenger/api/tickets';
  apiURLL: string='http://localhost:8888/passenger/api';
  apiURLLL: string = 'http://localhost:8888/passenger/api/flights';
  constructor(private http : HttpClient) { }

  listeTicket(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.apiURL);
    }

    ajouterTicket( tic: Ticket):Observable<Ticket>{
      return this.http.post<Ticket>(this.apiURL, tic, httpOptions);
      }

      updateTicket(tic :Ticket) : Observable<Ticket>
      {
      return this.http.put<Ticket>(this.apiURL, tic, httpOptions);
      }

      consulterTicket(id: number): Observable<Ticket> {
        const url = `${this.apiURL}/${id}`;
        return this.http.get<Ticket>(url);
        }
        listePassenger(): Observable<Passenger[]>{
          return this.http.get<Passenger[]>(this.apiURLL);
          }
          listeFlight(): Observable<Flight[]>{
            return this.http.get<Flight[]>(this.apiURLLL);
            }

            supprimerTicket(id : number): Observable<Ticket> {
              return this.http.delete<Ticket>(this.apiURL+"/" + id);
                 }



}
