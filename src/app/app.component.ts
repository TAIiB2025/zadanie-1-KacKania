import { Component } from '@angular/core';
import { Produkt } from './app-produkt/model/produkt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Zad1';

  cenaWszystko: number = 0;
  czyPokazac: boolean = false;
  buttonText: string = "Pokaz produkty";

  produkt1 = new Produkt("ciasto", 15.59, new Date("2001/09/31"), false);
  produkt2 = new Produkt("maslo", 1.39, new Date("2001/09/31"), true);
  produkt3 = new Produkt("szynka", 155.09, new Date("2001/09/31"), false);
  produkt4 = new Produkt("kawa", 98.09, new Date("2001/09/31"), true);
  produkt5 = new Produkt("herbata", 44.35, new Date("2001/09/31"), true);

  produkty = [this.produkt1, this.produkt2, this.produkt3, this.produkt4, this.produkt5 ];

  onDodaj(produkt: Produkt): void {
      this.cenaWszystko += produkt.cena;
      produkt.ilosc++;
  }

  onWyczysc()
  {
    
  }

  pokazProdukty() {
    this.czyPokazac = !this.czyPokazac;
    this.buttonText = this.czyPokazac ? 'Ukryj produkty' : 'Pokaz produkty';
  }

}
