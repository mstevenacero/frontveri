import { Component, OnInit } from '@angular/core';
import { DataObservableService } from 'src/app/services/data-observable.service';
import { HttpApiRestService } from 'src/app/services/http-api-rest.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-template-crito',
  templateUrl: './template-crito.page.html',
  styleUrls: ['./template-crito.page.scss'],
})
export class TemplateCritoPage implements OnInit {
  coinCurrent=""
  urlSend =""
  forData:any=[]

  constructor(
    private _coinChange:DataObservableService,
    private _http:HttpApiRestService,
    private router:Router
     ){ }

  ngOnInit(){
    this._coinChange.currentCoin.subscribe(data=>{
      this.coinCurrent = data
    }
    )
    console.log("moneda de: ", this.coinCurrent);
    //markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h
    this.urlSend = "markets?vs_currency="+this.coinCurrent+"&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h";
    console.log("url completa",this.urlSend);

    this.getApi(this.urlSend)
    
  }
  getApi(Url){
    this._http.get(Url).subscribe(response =>{

      if(response){
         console.log("respuesta de la api",response);
         this.forData = response
         
      }else{
        console.log("Upps a ocurrido un Error !");
        
      }
    })
  }

  sendId(id:string,name:string,image:string,price:string,ranking:string,estadistic:string){
    let dataOneCoin ={
      id,
      name,
      image,
      price,
      ranking,
      estadistic
    }
   this._coinChange.getId(dataOneCoin)
   this.router.navigateByUrl('coin-id')
  } 
}
