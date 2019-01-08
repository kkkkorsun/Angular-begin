import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  text : string = "Hello world";
  //items = ["Angular", "React", "Vue"];
  //isCollapsed : boolean = true; 
  constructor() { 
}
  
  ngOnInit() {
  }

}
