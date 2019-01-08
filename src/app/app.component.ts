import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';

@Component({
  selector: 'app-root',
  template: `<div> 
    <h1> Angular routes </h1> 
    <nav>
    <a routerLink = ""> Главная </a> 
    <a routerLink = "/about"> О нас </a> 
    <a routerLink = "/news"> Новости </a> 
    <a routerLink = "/price"> Цена </a> 
     </nav>
    <router-outlet>  </router-outlet>  
  </div>`
})
export class AppComponent {
  title = 'Web Developer';
  constructor(svc: NewServiceService) {
    svc.consoleText("Hello World");
  }
  
}
