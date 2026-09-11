import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface SolicitudAdopcion {
  id: number;
  cliente: string;
  mascota: string;
  fecha: string;
  motivo: string;
  tipoVivienda: string;
  correo: string;
  observaciones: string;
  estado: string;
}

@Component({
  selector: 'app-adopciones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adopciones.html',
  styleUrl: './adopciones.css'
})
export class AdopcionesComponent implements OnInit {
  adopcionForm!: FormGroup;
  mensajeExito: boolean = false;

  solicitudes: SolicitudAdopcion[] = [
    { id: 1048, cliente: 'Carlos Ruíz', mascota: 'Max (Golden Retriever)', fecha: '2026-09-10', motivo: 'Compañía familiar', tipoVivienda: 'Casa con jardín', correo: 'carlos.r@gmail.com', observaciones: 'Familia con experiencia previa en perros.', estado: 'Aprobada' },
    { id: 1049, cliente: 'Ana Torres', mascota: 'Luna (Gata Siamesa)', fecha: '2026-09-11', motivo: 'Compañía', tipoVivienda: 'Departamento amplio', correo: 'ana.torres@gmail.com', observaciones: 'Cuenta con red de protección en ventanas.', estado: 'Pendiente' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.adopcionForm = this.fb.group({
      cliente: ['', [Validators.required]],
      mascota: ['', [Validators.required]],
      fecha: [new Date().toISOString().substring(0, 10), [Validators.required]],
      motivo: ['', [Validators.required]],
      tipoVivienda: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      observaciones: ['', [Validators.maxLength(500)]]
    });
  }

  guardarSolicitud(): void {
    if (this.adopcionForm.valid) {
      const nueva: SolicitudAdopcion = {
        id: 1050 + this.solicitudes.length,
        ...this.adopcionForm.value,
        estado: 'Pendiente'
      };
      this.solicitudes.unshift(nueva);
      this.mensajeExito = true;
      this.adopcionForm.reset({
        fecha: new Date().toISOString().substring(0, 10)
      });
      setTimeout(() => this.mensajeExito = false, 4000);
    } else {
      this.adopcionForm.markAllAsTouched();
    }
  }

  // Getters auxiliares para validación en template
  get f() { return this.adopcionForm.controls; }
}
