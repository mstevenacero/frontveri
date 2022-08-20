import { Component, OnInit } from '@angular/core';
import { HttpApiRestService } from 'src/app/services/http-api-rest.service';
import { DataObservableService } from 'src/app/services/data-observable.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coin-id',
  templateUrl: './coin-id.page.html',
  styleUrls: ['./coin-id.page.scss'],
})
export class CoinIdPage implements OnInit {
  dataID :any=[]
  dataForm:any=[]
  dataCoinID:any=[]

  constructor(
    private _http:HttpApiRestService,
    private _data:DataObservableService,
    private router:Router,
  ) { }

  ngOnInit(){
     this._data.currenCoinId.subscribe(data =>{
       this.dataID = data;
     })
     console.log("data",this.dataID);
     //this.getCoin(this.dataID)
  }
 /* getCoin(id){
    this._http.getOne(id).subscribe(response =>{
    if(response){
     this.dataForm = response;
     console.log("llego la data del usuario",this.dataForm);
     console.log("llego la data del usuario",this.dataForm['image']?.thumb);
     console.log("llego la data del usuario",this.dataForm['image']?.thumb);

     let dataTmp={
     }
    }else{
      console.log("Ups !! Ocurrio un error en la api ");
    }
    })
  }*/
}
