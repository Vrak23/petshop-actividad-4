import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Cliente {
  nombres: string;
  apellidos: string;
  dni: string;
  telefono: string;
  correo: string;
  direccion: string;
}

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css'
})
export class ClientesComponent {
  cliente: Cliente = {
    nombres: '',
    apellidos: '',
    dni: '',
    telefono: '',
    correo: '',
    direccion: ''
  };

  clientesRegistrados: Cliente[] = [
    { nombres: 'Carlos', apellidos: 'Ruíz', dni: '72894120', telefono: '987654321', correo: 'carlos.r@gmail.com', direccion: 'Av. Larco 450' },
    { nombres: 'Ana', apellidos: 'Torres', dni: '71902488', telefono: '912345678', correo: 'ana.torres@gmail.com', direccion: 'Calle Las Flores 123' }
  ];

  mensajeExito: boolean = false;

  guardarCliente(form: any) {
    if (form.valid) {
      this.clientesRegistrados.push({ ...this.cliente });
      this.mensajeExito = true;
      form.resetForm();
      setTimeout(() => this.mensajeExito = false, 4000);
    }
  }
}
