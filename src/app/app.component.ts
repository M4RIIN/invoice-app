import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
import { Invoice } from 'src/assets/model';
import { InvoiceServiceFake } from './services/invoice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'invoiceApplication';
  @ViewChild("drawer") drawer : MatDrawer | undefined;
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  constructor(private darkModeService: DarkModeService,private invoiceService:InvoiceServiceFake
   ){}
  message = "not loaded"
  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe(data =>{
      console.log(data);
    })
    this.invoiceService.openNewView$.subscribe(elt =>{
      console.log(this.drawer)
      if(elt) this.drawer?.toggle();
    })
    document.addEventListener('DOMContentLoaded', (event) => {
      this.message = "Window loaded";
    })
  }

    onToggle(): void {
    this.darkModeService.toggle();
  }
}
