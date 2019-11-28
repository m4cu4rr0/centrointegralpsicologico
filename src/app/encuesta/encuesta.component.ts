import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.scss']
})
export class EncuestaComponent implements OnInit {
  
  seccion = 1;

  constructor() { }

  ngOnInit() {
  }

  siguiente(){
    window.scroll(0,0);
    this.seccion++;
  }

  anterior(){
    window.scroll(0,0);
    this.seccion--;
  }

}
