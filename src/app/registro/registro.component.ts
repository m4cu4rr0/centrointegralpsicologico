import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  cuestionario = 0;

  constructor() { }

  ngOnInit() {
  }

  validarFolio(){
    this.cuestionario = 1;
  }

}
