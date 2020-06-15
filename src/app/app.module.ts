import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './speelterrein/index/index.component';
import { DetailsComponent } from './speelterrein/details/details.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, IndexComponent, DetailsComponent, HeaderComponent, HomeComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    AppRoutingModule, 
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
