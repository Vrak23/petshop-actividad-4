import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Mascota {
  nombre: string;
  especie: string;
  raza: string;
  edad: number | null;
  sexo: string;
}

@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './mascotas.html'
})
export class MascotasComponent {
  mascota: Mascota = {
    nombre: '',
    especie: '',
    raza: '',
    edad: null,
    sexo: 'Macho'
  };

  mascotasRegistradas: Mascota[] = [
    { nombre: 'Max', especie: 'Perro', raza: 'Golden Retriever', edad: 3, sexo: 'Macho' },
    { nombre: 'Luna', especie: 'Gato', raza: 'Siamés', edad: 2, sexo: 'Hembra' }
  ];

  mensajeExito: boolean = false;

  guardarMascota(form: any) {
    if (form.valid) {
      this.mascotasRegistradas.push({ ...this.mascota });
      this.mensajeExito = true;
      form.resetForm({ sexo: 'Macho' });
      setTimeout(() => this.mensajeExito = false, 4000);
    }
  }
}
