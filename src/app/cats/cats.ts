import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PetService, Pet } from '../services/pet';

@Component({
  selector: 'app-cats',
  imports: [RouterLink], //Enruta mediante las rutas definidas en app-routing.module.ts
  standalone: true,
  templateUrl: './cats.html',
  styleUrl: './cats.css',
})

//Uso del servicio pets para obtener el detalle de los gatos perando en ID:
export class Cats {
  private petService = inject(PetService);
  cats: Pet[] = this.petService.getCats(); 
}
