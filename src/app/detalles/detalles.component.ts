import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Libro } from '../common/libro';
import firebase from "firebase/compat";
import app = firebase.app;
import db = firebase.database
import {collection} from "@angular/fire/firestore";

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {


  libros: Array<Libro>;
  libroId: any
  libroSeleccionado: any


  constructor(private ruta: ActivatedRoute) {
    // @ts-ignore
    this.libros = collection(db, 'libros');
  }

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      this.libroId = params['libroId'];
      this.libroSeleccionado = this.encontrarLibro();
    });
  }


  filtroPorID(libro: Libro) {
    return libro.id == parseInt(this.libroId, 10);
  }

  encontrarLibro() {
    console.log(this.libroId)
    return this.libros.filter((libro) => libro.id == this.libroId)[0];
  }
}
