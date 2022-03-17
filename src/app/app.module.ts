import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DARK_MODE_OPTIONS } from 'angular-dark-mode';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    MenuHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule
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
