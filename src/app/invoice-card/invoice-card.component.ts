import { Component, Input, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';
import { Invoice } from 'src/assets/model';

@Component({
  selector: 'app-invoice-card',
  templateUrl: './invoice-card.component.html',
  styleUrls: ['./invoice-card.component.scss']
})
export class InvoiceCardComponent implements OnInit {
  @Input() invoice:Invoice | undefined;
  darkMode$: Observable<boolean> | undefined ;
  constructor(private darkModeService: DarkModeService){}

  ngOnInit(): void {
    this.darkMode$ = this.darkModeService.darkMode$;
  }

}
