import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airline } from '../model/airline.model';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-update-airline',
  templateUrl: './update-airline.component.html',
  styleUrls: ['./update-airline.component.css']
})
  export class UpdateAirlineComponent implements OnInit {
    currentAirline = new Airline();
    constructor(private activatedRoute: ActivatedRoute,
      private airlineService: AirlineService,
      private router:Router) { }
      
  
  
    ngOnInit(): void {
      this.airlineService.consulterAirline(this.activatedRoute.snapshot.params['id']).
   subscribe( air=>{ this.currentAirline = air; } ) ;
  
    
    }
    updateAirline() {
      this.airlineService.updateAirline(this.currentAirline).subscribe(air => {
      this.router.navigate(['airlines']); }
      );
      }
      
  
  }

