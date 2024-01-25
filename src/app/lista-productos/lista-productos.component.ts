import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { producto } from '../productos';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {

  productos = producto;

}
