import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { AppComponent } from './app.component';
import { StrategyComponent } from './strategy/strategy.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
{ path: 'about', component: AboutComponent},
{ path: '', component: HomeComponent},
{ path: 'strategy', component: StrategyComponent},
{ path: 'intro', component: IntroComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[ RouterModule ],
  declarations:[]
})

export class AppRoutingModule { }
export const routingComponents = [AboutComponent]
