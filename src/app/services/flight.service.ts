import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Flight } from '../model/flight.model';
import { Airline } from '../model/airline.model';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
}; 

@Injectable({ 
  providedIn: 'root'
})
export class FlightService {
  apiURL: string = 'http://localhost:8888/passenger/api/flights';
  apiURLL:string = 'http://localhost:8888/passenger/api/airlines';
  apiURL3:string='http://localhost:8888/passenger/api/flights/count';
  constructor(private http : HttpClient) { }
  
  listeFlight(): Observable<Flight[]>{
    return this.http.get<Flight[]>(this.apiURL);
    }
    ajouterFlight( fly: Flight):Observable<Flight>{
      return this.http.post<Flight>(this.apiURL, fly, httpOptions);
      }
      listeAirline():Observable<Airline[]>{
        return this.http.get<Airline[]>(this.apiURLL);
        }
        ajouterAirline( pass: Airline):Observable<Airline>{
          return this.http.post<Airline>(this.apiURLL, pass, httpOptions);
          }
          updateFlight(fly :Flight) : Observable<Flight>
            {
            return this.http.put<Flight>(this.apiURL, fly, httpOptions);
            }
            updateAirline(air :Airline) : Observable<Airline>
            {
            return this.http.put<Airline>(this.apiURLL, air, httpOptions);
            }
            supprimerFlight(id : number): Observable<Flight> {
              return this.http.delete<Flight>(this.apiURL+"/" + id);
                 }
                 consulterFlight(id: number): Observable<Flight> {
                  const url = `${this.apiURL}/${id}`;
                  return this.http.get<Flight>(url);
                  }


                  rechercherParNom(nom: string):Observable< Flight[]> {
                    const url = `${this.apiURL}/flyByName/${nom}`;
                    return this.http.get<Flight[]>(url);
                    }

                    findBydestinationFlight(destinationFlight:string): Observable<Flight[]>{
                      return this.http.get<Flight[]>(this.apiURL);
                      }

                      countFlight(): Observable<number> {
                        return this.http.get<number>(this.apiURL3);
                      }



                    
}
