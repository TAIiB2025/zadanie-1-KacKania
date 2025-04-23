import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produkt } from './model/produkt';

@Component({
  selector: 'app-produkt',
  templateUrl: './app-produkt.component.html',
  styleUrls: ['./app-produkt.component.css']
})
export class AppProduktComponent {
  @Input('produkt') produkt?: Produkt;
  @Output() dodaj: EventEmitter<Produkt> = new EventEmitter<Produkt>();
  onDodaj(){
    this.dodaj.emit(this.produkt);
    
  }
}
