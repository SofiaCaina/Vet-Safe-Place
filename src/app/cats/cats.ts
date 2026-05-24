import { Component } from '@angular/core';

@Component({
  selector: 'app-cats',
  imports: [],
  templateUrl: './cats.html',
  styleUrl: './cats.css',
})
export class Cats {
  cats = [
    { id: 1, name: 'Mishi',   age: 2, description: 'Tranquilo y cariñoso, ideal para apartamento.' },
    { id: 2, name: 'Luna',    age: 1, description: 'Juguetona y curiosa, le encanta explorar.' },
    { id: 3, name: 'Simba',   age: 4, description: 'Adulto independiente, muy limpio y silencioso.' },
    { id: 4, name: 'Pelusa',  age: 3, description: 'Adora los mimos y dormir en el sofá.' },
    { id: 5, name: 'Garfield',age: 5, description: 'Gordito y dormilón, fan de la lasaña.' },
    { id: 6, name: 'Nala',    age: 2, description: 'Muy sociable, se lleva bien con niños.' },
  ];
}
