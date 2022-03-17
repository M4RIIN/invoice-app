import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'invoiceApplication';
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  constructor(private darkModeService: DarkModeService){}

  ngOnInit(): void {
    this.darkModeService.darkMode$.subscribe(data =>{
      console.log(data);
    })
  }

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
