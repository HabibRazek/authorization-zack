import { Component, OnInit } from '@angular/core';
import { Airline } from '../model/airline.model';
import { AirlineService } from '../services/airline.service';

@Component({
  selector: 'app-airlines',
  templateUrl: './airlines.component.html',
  styleUrls: ['./airlines.component.css']
})
export class AirlinesComponent implements OnInit {
airlines!:Airline[];
constructor(private airlineService : AirlineService){

}


  ngOnInit(): void {

    this.airlineService.listeAirline().subscribe((data)=>{ this.airlines=data;
      console.log(this.airlines);
      
     })}
     deletea(id:number){
      this.airlineService.supprimerAirline(id).subscribe((data)=>{
        console.log(data);
    this.airlineService.listeAirline().subscribe((data)=>
      {
        this.airlines=data;
        console.log(this.airlines);
   
      });
    });}


  
  }

