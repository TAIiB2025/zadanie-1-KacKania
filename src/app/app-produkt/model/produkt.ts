export class Produkt
{
    nazwa: string;
    cena: number;
    dataUtworzenia: Date;
    czyPromocja: boolean;
    ilosc: number;

    constructor(nazwa: string, cena: number, dataUtworzenia: Date, czyPromocja: boolean)
    {
        this.nazwa = nazwa;
        this.cena = cena;
        this.dataUtworzenia = dataUtworzenia;
        this.czyPromocja = czyPromocja;
        this.ilosc = 0;
    }
}