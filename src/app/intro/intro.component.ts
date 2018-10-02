import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  public employers = [];
  constructor() { }

  ngOnInit() {
  }

}


/*  constructor(private_dataService: DataService) { }

  ngOnInit() {
    this._dataServive.getUsers()
      .subscribe(data => this.users = data);

    }
}*/
