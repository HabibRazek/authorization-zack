import { Injectable } from '@angular/core';
import { Passenger } from '../model/passenger.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  apiURL: string = 'http://localhost:8888/passenger/api';
  apiURLL: string = 'http://localhost:8888/passenger/api/count';
  constructor(private http: HttpClient) {}

  listePassenger(): Observable<Passenger[]> {
    return this.http.get<Passenger[]>(this.apiURL);
  }

  ajouterPassenger(pass: Passenger): Observable<Passenger> {
    return this.http.post<Passenger>(this.apiURL, pass, httpOptions);
  }

  supprimerPassenger(id: number): Observable<Passenger> {
    return this.http.delete<Passenger>(this.apiURL + '/' + id);
  }

  consulterPassenger(id:number): Observable<Passenger> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Passenger>(url);
  }

  updatePassenger(pass: Passenger): Observable<Passenger> {
    return this.http.put<Passenger>(this.apiURL, pass, httpOptions);
  }

  countPassenger(): Observable<number> {
    return this.http.get<number>(this.apiURLL);
  }
  getPssengerByfirstname(name: string): Observable<Passenger> {
    const url = `${this.apiURL}/${String}`;
    return this.http.get<Passenger>(this.apiURL);
  }
}
