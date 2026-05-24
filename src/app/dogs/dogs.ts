import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PetService, Pet } from '../services/pet';

@Component({
  selector: 'app-dogs',
  imports: [RouterLink], //Enrutamiento
  standalone: true,
  templateUrl: './dogs.html',
  styleUrl: './dogs.css',
})

//Uso del servicio pets para obtener el detalle de los gatos perando en ID:
export class Dogs {
  private petService = inject(PetService);
  dogs: Pet[] = this.petService.getDogs();
}