import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttiviComponent } from './attivi/attivi/attivi.component';
import { InattiviComponent } from './inattivi/inattivi/inattivi.component';
import { HomeComponent } from './home/home/home.component';
import { PostCardComponent } from './post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AttiviComponent,
    InattiviComponent,
    HomeComponent,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
