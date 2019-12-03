import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-quest3',
  templateUrl: './quest3.component.html',
  styleUrls: ['./quest3.component.scss']
})
export class Quest3Component implements OnInit {

  @Output() jsonSalida: EventEmitter<string> = new EventEmitter<string>();
  seccion = 1;
  json: string;
  error = 0;
  serCliente: number;
  esJefe: number;

  quest3 = {
      preg1: null,
      preg2: null,
      preg3: null,
      preg4: null,
      preg5: null,
      preg6: null,
      preg7: null,
      preg8: null,
      preg9: null,
      preg10: null,
      preg11: null,
      preg12: null,
      preg13: null,
      preg14: null,
      preg15: null,
      preg16: null,
      preg17: null,
      preg18: null,
      preg19: null,
      preg20: null,
      preg21: null,
      preg22: null,
      preg23: null,
      preg24: null,
      preg25: null,
      preg26: null,
      preg27: null,
      preg28: null,
      preg29: null,
      preg30: null,
      preg31: null,
      preg32: null,
      preg33: null,
      preg34: null,
      preg35: null,
      preg36: null,
      preg37: null,
      preg38: null,
      preg39: null,
      preg40: null,
      preg41: null,
      preg42: null,
      preg43: null,
      preg44: null,
      preg45: null,
      preg46: null,
      preg47: null,
      preg48: null,
      preg49: null,
      preg50: null,
      preg51: null,
      preg52: null,
      preg53: null,
      preg54: null,
      preg55: null,
      preg56: null,
      preg57: null,
      preg58: null,
      preg59: null,
      preg60: null,
      preg61: null,
      preg62: null,
      preg63: null,
      preg64: null,
      preg65: null,
      preg66: null,
      preg67: null,
      preg68: null,
      preg69: null,
      preg70: null,
      preg71: null,
      preg72: null      
  }

  constructor() { }

  ngOnInit() {
  }

  anterior() {
    window.scroll(0, 0);
    this.seccion--;
  }

  siguiente() {
    window.scroll(0, 0);
    this.seccion++;
  }

  salir() {
    this.json = JSON.stringify(this.quest3);
    this.jsonSalida.emit(this.json);
  }

  clienteChange($event){
    console.log(this.serCliente);
    if(this.serCliente == 0){
      this.quest3.preg41 = '0';
      this.quest3.preg42 = '0';
      this.quest3.preg43 = '0';
    }
  }

  jefeChange($event){
    console.log(this.esJefe);
    if(this.esJefe == 0){
      this.quest3.preg44 = '0';
      this.quest3.preg45 = '0';
      this.quest3.preg46 = '0';
    }
  }

}