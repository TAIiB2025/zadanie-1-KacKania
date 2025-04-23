import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-koszyk',
  templateUrl: './app-koszyk.component.html',
  styleUrls: ['./app-koszyk.component.css']
})
export class AppKoszykComponent {
  @Input() suma? : number;
  @Output() wyczysc: EventEmitter<any> = new EventEmitter();
  
  onWyczysc() {
    this.suma = 0;
    this.wyczysc.emit();
  }
}
