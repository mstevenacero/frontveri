import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.nextPage('home')
      
    }, 3000);
  }
 nextPage(url:string){
   console.log("entre");
   
   this.router.navigateByUrl(url)
 }
}