import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from '../model/airline.model';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {
  newAirline = new Airline();

  constructor(private airlineService: AirlineService,
    private router:Router) { }

  ngOnInit(): void {
   
  }
  AddAirline(){
    this.airlineService.ajouterAirline(this.newAirline).subscribe(air => {
    console.log(air);
    this.router.navigate(['airlines']);
    });
  }
}
