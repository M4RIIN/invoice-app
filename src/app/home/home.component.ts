import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
import { Invoice } from 'src/assets/model';
import { InvoiceServiceFake } from '../services/invoice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private darkModeService: DarkModeService,  private invoiceService:InvoiceServiceFake) { }
  invoices$ :Observable<Invoice[]> | undefined;
  ngOnInit(): void {

  this.invoices$ = this.invoiceService.getAllInvoices();
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
  title = 'invoiceApplication';
  @ViewChild("drawer") drawer : MatDrawer | undefined;
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  message = "not loaded"


    onToggle(): void {
    this.darkModeService.toggle();
  }
}
