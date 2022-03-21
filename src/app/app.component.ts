import { Component, HostListener, OnInit } from '@angular/core';
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

  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  constructor(private darkModeService: DarkModeService
   ){}
  message = "not loaded"
  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe(data =>{
      console.log(data);
    })

    document.addEventListener('DOMContentLoaded', (event) => {
      this.message = "Window loaded";
    })
  }

    onToggle(): void {
    this.darkModeService.toggle();
  }
}
