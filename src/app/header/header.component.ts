import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  header ={
    heading:'My website',
    headingtext:'',
    buttontext:'',
    buttonlink:'\home'
  };

  constructor() { }

  ngOnInit() {
  }

}
