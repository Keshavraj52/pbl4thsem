import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PgDetailsComponent } from './pg-details/pg-details.component';
import { HeaderComponent } from './header/header.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { GoogleMapComponent } from './google-map/google-map.component';
import { ProximityComponent } from './proximity/proximity.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    PgDetailsComponent,
    HeaderComponent,
    GoogleMapComponent,
    ProximityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
