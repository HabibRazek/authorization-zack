import { Passenger } from "./passenger.model";
import { Flight } from "./flight.model";
export class Ticket {
    idTicket! : number;
    codeTicket!:string;
    typeTicket! : string;
    amountTicket! : string;
    status!:string;
    nbrTicket!:number;
    passenger! : Passenger;
    flight! : Flight;

    }