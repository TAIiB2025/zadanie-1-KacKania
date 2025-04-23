import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppProduktComponent } from './app-produkt/app-produkt.component';
import { AppKoszykComponent } from './app-koszyk/app-koszyk.component';

@NgModule({
  declarations: [
    AppComponent,
    AppProduktComponent,
    AppKoszykComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
