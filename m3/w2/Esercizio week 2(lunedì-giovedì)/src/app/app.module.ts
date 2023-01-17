import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActiveComponent } from './components/active/active.component';
import { InactiveComponent } from './components/inactive/inactive.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { EvidenziaDirective } from './directives/evidenzia.directive';
import { MaiuscoloPipe } from './pipes/maiuscolo.pipe';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TodosModule } from './todos/todos.module';


@NgModule({
  declarations: [
    AppComponent,
    ActiveComponent,
    InactiveComponent,
    HomeComponent,
    PostComponent,
    EvidenziaDirective,
    MaiuscoloPipe,
    PostDetailComponent,
    UsersComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
