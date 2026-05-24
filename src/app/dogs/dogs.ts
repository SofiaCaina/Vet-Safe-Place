import { Component } from '@angular/core';

@Component({
  selector: 'app-dogs',
  imports: [],
  templateUrl: './dogs.html',
  styleUrl: './dogs.css',
})
export class Dogs {
  dogs = [
    { id: 1, name: 'Rocky',   age: 3, description: 'Enérgico y leal, ideal para casas con jardín.' },
    { id: 2, name: 'Canela',  age: 2, description: 'Dulce y tranquila, perfecta para familias con niños.' },
    { id: 3, name: 'Thor',    age: 4, description: 'Inteligente y obediente, le encanta aprender trucos.' },
    { id: 4, name: 'Lola',    age: 1, description: 'Cachorra curiosa y juguetona, llena de energía.' },
    { id: 5, name: 'Toby',    age: 6, description: 'Adulto tranquilo, prefiere paseos cortos y mimos.' },
    { id: 6, name: 'Coco',    age: 3, description: 'Sociable con otros perros, ama los parques.' },
  ];
}