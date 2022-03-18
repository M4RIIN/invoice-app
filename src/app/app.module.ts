import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DARK_MODE_OPTIONS } from 'angular-dark-mode';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { InvoiceCardComponent } from './invoice-card/invoice-card.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent,
    InvoiceCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  providers: [
    {
      provide: DARK_MODE_OPTIONS,
      useValue: {
          element: document.body,
      }
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
