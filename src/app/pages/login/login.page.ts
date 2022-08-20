import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {
    name: "",
    identification_card: null,
    phone: "",
    password: null,
    balance: null
  }
userLogin = {
    identification_card: null,
    password: null
}
userData : any =[]
change : boolean = true;
change2 :boolean = false;

  constructor(private _httpService:RestService , private router:Router) { }

  ngOnInit() {
  }
  createCount() {
    this.user
    this._httpService.post('users/', this.user).subscribe(
      response => {
        if (!response) {
          console.error('Error: no se encontro usuario');
        } else {
          this.change  = false;
          this.change2  = true;
          //('se encontro usuario');
        }
      }
    );
  }
  changeOne(){
    if(this.change == true){
      this.change = false;
      this.change2 = true ;
      return
    }
  }
  changeTwo(){
    if(this.change2 == true){
      this.change = true;
      this.change2 = false ;
      return
    }
  }
  LoginUp() {
    this.userLogin
    //("registro",this.registro);
    this._httpService.post('users/login/', this.userLogin).subscribe(
      response => {
        if (!response) {
          console.error('Error: no se encontro usuario');
        } else {
          this.userData = response
          localStorage.setItem('token', this.userData.token);
          localStorage.setItem('nombre', this.userData.data.name)         
          setTimeout(() => {
            this.router.navigateByUrl('/news');
          }, 1000); 
          //('se encontro usuario');

        }
      }
    );
  }



}
