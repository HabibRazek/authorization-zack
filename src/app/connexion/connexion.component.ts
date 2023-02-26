import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from '../model/passenger.model';
import { AuthService } from '../services/auth.service';
import { PassengerService } from '../services/passenger.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit{

constructor(private passengerService:PassengerService,private router:Router,
  public authService:AuthService){}

public isloggedIn: Boolean = false;
passengers!:Passenger[];
username!:string;
password!:string;
errorMessage!:string;
public loggedUser!:string;
public id:number=0;
pass = new Passenger();
roles!:string;


ngOnInit(): void {
  this.passengerService.listePassenger().subscribe((data)=>{
   this.passengers=data;


  })
}
SignIn(user:Passenger):Boolean {
    let validUser: Boolean = false;
    this.passengers.forEach((curUser) => {
    if(user.firstnamePassenger== curUser.firstnamePassenger && user.passwordPassenger==curUser.passwordPassenger) {
    validUser = true;
    this.loggedUser = curUser.firstnamePassenger;
    this.id=curUser.idPassenger;
    this.isloggedIn = true;
    this.roles=curUser.role;
    localStorage.setItem('roles',this.roles);
    localStorage.setItem('id',String(this.id));
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));


   } });
   return validUser;
}
onLoggedin(){
  let isValidUser: Boolean = this.SignIn(this.pass);
  if (isValidUser)
  this.router.navigate(['/flights']);

  else
  alert('Login ou mot de passe incorrecte!');
  console.log(this.pass);
  }
  getLoggedUser() {
    return this.loggedUser;
  }
  logout() {
    this.isloggedIn= false;
    this.loggedUser = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    }

}
