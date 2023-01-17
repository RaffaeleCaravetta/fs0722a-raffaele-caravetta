import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { AttiviComponent } from './attivi/attivi/attivi.component';
import { InattiviComponent } from './inattivi/inattivi/inattivi.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"attivi",
    component:AttiviComponent
  },
  {
    path:"inattivi",
    component:InattiviComponent
  },
  { path:"**",
    component:AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
