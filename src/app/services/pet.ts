//Simulacion de API:
import { Injectable } from '@angular/core';

//Define el objetivo y los atributos qu4e debe de tener:
export interface Pet {
  id: number;
  name: string;
  age: number;
  description: string;
  type: 'cat' | 'dog';
  breed: string;
  gender: 'Macho' | 'Hembra';
}

//Infromacion inyectadad delos objetos:
@Injectable({
  providedIn: 'root',
})
export class PetService {

  private cats: Pet[] = [
  {id: 1, name: `Mishi`, age: 2, breed: `Mestizo`, gender: `Macho`,type: `cat`, description: `Tranquilo y carinoso, ideal para apartamento.`},
  {id: 2, name: `Luna-Lunera`, age: 1, breed: `Siames`, gender: `Hembra`,type: `cat`, description: `Juguetona y curiosa, le encantaexplorar.`},
  {id: 3, name: `Mufasa`, age: 4, breed: `Persa`, gender: `Macho`,type: `cat`, description: `Adulto independiente, muy limpio y silencioso.`},
  {id: 5, name: `Garfield`, age: 5, breed: `Atigrado`, gender: `Macho`,type: `cat`, description: `Gordito y dormilon, fan de la lasagna.`},
  {id: 6, name: `Nala`, age: 2, breed: `Mestizo`, gender: `Hembra`,type: `cat`, description: `Muy sociable, se lleva bien con los ninos.`},
  ]

  private dogs: Pet[] = [
    {id: 1, name: `Rocky`, age: 3, breed: `Labrador`, gender: `Macho`,type: `dog`, description: `Energico y leal, ideal para casas de jardin.`},
    {id: 2, name: `Canela`, age: 2, breed: `Golden`, gender: `Hembra`,type: `dog`, description: `Dulce y tranquila, perfecta para familias con ninos.`},
    {id: 3, name: `Thor`, age: 4, breed: `Pastor Aleman`, gender: `Macho`,type: `dog`, description: `Inteligente y obediente, le encanta aprender trucos.`},
    {id: 4, name: `Lolas`, age: 1, breed: `Beagle`, gender: `Hembra`,type: `dog`, description: `Cachorra curiosa y juguetona, llena de energia.`},
    {id: 5, name: `Tobys`, age: 6, breed: `Bulldog`, gender: `Macho`,type: `dog`, description: `Adulto tranquilo, prefiere paseos cortos y mimos.`},
    {id: 6, name: `Cocosete`, age: 3, breed: `Poodle`, gender: `Hembra`,type: `dog`, description: `Sociable con otros perrros. ama los parques`},
    ]

    //Metodos para filtrar el tipo perro y el tipo gato y por ID:
    getCats(): Pet[] {
      return this.cats;
    }

    getDogs(): Pet[] {
      return this.dogs;
    }

    getCatById(id: number): Pet | undefined {
      return this.cats.find(c => c.id === id);
    }

    getDogById(id: number): Pet | undefined {
      return this.dogs.find(d => d.id === id);
    }
}
