import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {
  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
