import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Invoice } from 'src/assets/model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceServiceFake {

  private data = [
      {
        'code':"XM9089",
        'due': '19 Aug 2021',
        'who' : 'Jensen Huang',
        'price' : 1800.90,
        'status' : 'Pending'
      },
      {
        'code':"RT3080",
        'due': '20 Sep 2021',
        'who' : 'Alex Grim',
        'price' : 556.76,
        'status' : 'Draft'
      },
      {
        'code':"RG0314",
        'due': '21 OCt 2021',
        'who' : 'Alysa Werner',
        'price' : 102.55,
        'status' : 'Pending'
      },
      {
        'code':"RG0314",
        'due': '21 OCt 2021',
        'who' : 'Alysa Werner',
        'price' : 102.55,
        'status' : 'Pending'
      },
      {
        'code':"RG0314",
        'due': '21 OCt 2021',
        'who' : 'Alysa Werner',
        'price' : 102.55,
        'status' : 'Pending'
      },
      {
        'code':"RG0314",
        'due': '21 OCt 2021',
        'who' : 'Alysa Werner',
        'price' : 102.55,
        'status' : 'Pending'
      }
    ];
  private _invoices: BehaviorSubject<Invoice[]> = new BehaviorSubject(this.data);
  public invoices$ : Observable<Invoice[]> = this._invoices.asObservable();
  filter:string = "";
  private _openNewView : BehaviorSubject<any> = new BehaviorSubject(null);
  public openNewView$ : Observable<Boolean> = this._openNewView.asObservable();
  constructor() { }

  getAllInvoices():Observable<Invoice[]>{

    return this.invoices$;
  }

  setUpFilter(filter:string){
    this.filter = filter;
    if(filter ==="") {this._invoices.next(this.data);
      return;
    }
    this._invoices.next(this.data.filter(elt => elt.status === filter));
  }

  addInvoice(){
    this.data.push(
      {
        'code':"RG0314",
        'due': '21 OCt 2021',
        'who' : 'Alysa Werner',
        'price' : 102.55,
        'status' : 'Paid'
      }
    );
    this._invoices.next(this.data);
  }

  handleNewView(){
    this._openNewView.next(true);
  }
}



