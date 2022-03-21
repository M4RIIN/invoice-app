import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
import { Invoice } from 'src/assets/model';
import { InvoiceServiceFake } from '../services/invoice.service';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('200ms ease-out')),
      transition('default => rotated', animate('200ms ease-in')),
    ]),
  ],
})
export class MenuHeaderComponent implements OnInit {

  @Output() onClickOpenNew = new EventEmitter<boolean>();
  darkMode$: Observable<boolean> | undefined ;
  invoices$ :Observable<Invoice[]> | undefined;
  constructor(private darkModeService: DarkModeService,private invoiceService:InvoiceServiceFake){}
  state: string = 'default';
  filter:string = "";

  ngOnInit(): void {
    this.darkMode$ = this.darkModeService.darkMode$;
    this.invoices$ = this.invoiceService.getAllInvoices();
  }

  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }
  setFilter(filter:string){
    if(this.filter === filter){
      this.filter = ""
    }else this.filter = filter;
    this.invoiceService.setUpFilter(this.filter);
    this.invoices$ = this.invoiceService.getAllInvoices();
  }

  isChecked(value:string):boolean{
    return value === this.filter;
  }
  openMenuAdd(){
    //this.invoiceService.addInvoice();
    this.invoiceService.handleNewView();
  }

}
