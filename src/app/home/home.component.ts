import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Invoice } from 'src/assets/model';
import { InvoiceServiceFake } from '../services/invoice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(  private invoiceService:InvoiceServiceFake) { }
  invoices$ :Observable<Invoice[]> | undefined;
  ngOnInit(): void {

  this.invoices$ = this.invoiceService.getAllInvoices();
  }
  handleOpenMenuAdd(event:boolean){

  }
}
