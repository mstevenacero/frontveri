import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataObservableService } from 'src/app/services/data-observable.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  change = ''

  // hacer un servicio behaivorsubject 
  // enviar data(change) al observable
  //crear  servivio de enpoiunt
  //crear una funcion para el endpoint
  //mostrar la data 
  constructor(private router:Router, private _coinChange:DataObservableService) { }

  ngOnInit() {
  }

  sendActivate(){
    console.log("moneda",this.change);
    this._coinChange.changeCoin(this.change)
    this.router.navigateByUrl('template-crito')
  }

}
