import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url)
   }

  ngOnInit() {
  }

}
