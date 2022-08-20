import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataObservableService {
  private varialCoin = new BehaviorSubject('');
  private varialCoinID = new BehaviorSubject<{}>({});
  currentCoin = this.varialCoin.asObservable();
  currenCoinId = this.varialCoinID.asObservable();
  constructor() { }

  changeCoin(data:string){
   this.varialCoin.next(data)
  }
  getId(data:any){
    this.varialCoinID.next(data);
  }


}
