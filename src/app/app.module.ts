import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule } from 'angularfire2/database'; 
import {AngularFireAuthModule, AngularFireAuth} from 'angularfire2/auth';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
import {FormsModule} from '@angular/forms' ;

import { AppComponent } from './app.component';
import { environment } from '../environments/environment.prod';
import { NavbarComponent } from './navbar/navbar.component';
import { ListComponent } from './list/list.component';
import {AppRoutingModule} from './app-routing-module'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule , 
    AngularFireAuthModule,
    NgbModule.forRoot(),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
