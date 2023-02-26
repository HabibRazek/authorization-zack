import { Airline } from "./airline.model";
export class Flight {
    idFlight! : number;
    codeFlight! : string;
    departFlight! : string;
    destinationFlight!:string;
    dateFlight!:Date;
    numberofseatsFlight!:number;
    airline! : Airline;
    }