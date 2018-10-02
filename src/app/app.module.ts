import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ImagesComponent } from './images/images.component';

import { WeAreReadyComponent } from './we-are-ready/we-are-ready.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { NavComponent } from './nav/nav.component';
import { EmployeeService } from './employee.service';


import {HttpClientModule} from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { StrategyComponent } from './strategy/strategy.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ImagesComponent,
    WeAreReadyComponent,
    FooterComponent,
    HeaderComponent,
    SocialComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    StrategyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
