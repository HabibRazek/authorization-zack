import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Passenger } from '../model/passenger.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  public isloggedIn: Boolean = false;
  passengers!:Passenger[];
  username!:string;
  password!:string;
  errorMessage!:string;
  public loggedUser!:string;
  pass = new Passenger();
  public roles!:string;
  public id:number=0;


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
    this.router.navigate(['/connexion']);
    }


    isAdmin():Boolean{
      if(this.roles=="ADMIN")
      return false;
      else
      return true;
      }



      // this.value=localStorage.getItem("id");
      // this.passengerService.consulterPassenger(this.value).subscribe((data) => {
      // this.pass = data;

      // console.log(this.pass);
      // this.role=this.pass.role

      // if(this.role=="ADMIN"){
      //   this.admin=true;
      // }else{
      //   this.admin=false;
      // }
      // console.log(this.admin);


}
