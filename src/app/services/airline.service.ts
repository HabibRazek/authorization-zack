import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Airline } from '../model/airline.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};

@Injectable({
  providedIn: 'root'
})
export class AirlineService {
    apiURL: string = 'http://localhost:8888/passenger/api/airlines';
    apiURL2:string='http://localhost:8888/passenger/api/airlines/count';
      constructor(private http : HttpClient) {
      }
      
      
      listeAirline(): Observable<Airline[]>{
        return this.http.get<Airline[]>(this.apiURL);
        }
        ajouterAirline( pass: Airline):Observable<Airline>{
          return this.http.post<Airline>(this.apiURL, pass, httpOptions);
          }

          consulterAirline(id: number): Observable<Airline> {
            const url = `${this.apiURL}/${id}`;
            return this.http.get<Airline>(url);
            }

           updateAirline(air :Airline) : Observable<Airline>
            {
            return this.http.put<Airline>(this.apiURL, air, httpOptions);
            }
  
            supprimerAirline(id : number): Observable<Airline> {
              return this.http.delete<Airline>(this.apiURL+"/" + id);
                 }
                 countAirline(): Observable<number> {
                  return this.http.get<number>(this.apiURL2);
                }

}
