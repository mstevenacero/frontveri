import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  public url:string;

  constructor(private http:HttpClient) { 
    this.url = environment.BACK;
  }
  post(endpoint: string, form: any) {
    return this.http.post(`${this.url}${endpoint}`, form);
  }
  get(endpoint: string) {
    return this.http.get(`${this.url}${endpoint}`);
  }
  getOne(endpoint: string,parameters:string) {
    return this.http.get(`${this.url}${endpoint}/${parameters}`);
  }
  update(endpoint: string,parameters:string,form:any) {
    return this.http.put(`${this.url}${endpoint}/${parameters}`,form);
  }
}
