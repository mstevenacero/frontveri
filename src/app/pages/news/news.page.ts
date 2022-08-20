import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  nameUser =""
  news ={
    categoria:"general",
    pais:"co",
    lenguage:"es"
  }
  newData :any = []
  dataFor : any =[]

  constructor( private _httpService:RestService , private router :Router) { }

  ngOnInit() {
   let name = String(localStorage.getItem('nombre'))
   this.nameUser = name
   this.filter()

  }
  filter() {
    this.news
    this._httpService.post('news/', this.news).subscribe(
      response => {
        if (!response) {
          console.error('Error: no se encontro usuario');
        } else {
          this.newData = response
           this.dataFor= this.newData.data.articles
          console.log(this.dataFor);       
          //('se encontro usuario');
        }
      }
    );
  }
  routerClick(link: string) {
    this.router.navigateByUrl(link);
  }
  logIn(){
    localStorage.clear()
  }
}
