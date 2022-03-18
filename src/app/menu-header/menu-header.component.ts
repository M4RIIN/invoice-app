import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

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

  darkMode$: Observable<boolean> | undefined ;
  constructor(private darkModeService: DarkModeService){}
  state: string = 'default';
  filter:string = "";

  ngOnInit(): void {
    this.darkMode$ = this.darkModeService.darkMode$;
  }

  rotate() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }

  isChecked(value:string):boolean{
    return value === this.filter;
  }

}
