import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpApiRestService {
 public url:string;

  constructor(private http:HttpClient) {
    this.url = environment.API_URL;

   }
   get(endpoint: string) {
    return this.http.get(`${this.url}${endpoint}`);
  }
  getOne(id:string){
    return this.http.get(`${this.url}${id}`)
  }
}
