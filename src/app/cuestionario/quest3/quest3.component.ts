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
    if(this.seccion == 1){
      if(this.quest3.preg1 === null ||
        this.quest3.preg2 === null ||
        this.quest3.preg3 === null ||
        this.quest3.preg4 === null ||
        this.quest3.preg5 === null ){
          this.error = 1 ;
        } else {
          this.error = 0;
          window.scroll(0, 0);
          this.seccion++;
        }
    } else if (this.seccion == 2) {
      if(this.quest3.preg6 === null ||
        this.quest3.preg7 === null ||
        this.quest3.preg8 === null  ){
          this.error = 1 ;
        } else {
          this.error = 0;
          window.scroll(0, 0);
          this.seccion++;
        }
    } else if (this.seccion == 3) {
      if(this.quest3.preg9 === null ||
        this.quest3.preg10 === null ||
        this.quest3.preg11 === null ||
        this.quest3.preg12 === null  ){
          this.error = 1 ;
        } else {
          this.error = 0;
          window.scroll(0, 0);
          this.seccion++;
        }
    } else if (this.seccion == 4) {
      if(this.quest3.preg13 === null ||
        this.quest3.preg14 === null ||
        this.quest3.preg15 === null ||
        this.quest3.preg16 === null  ){
          this.error = 1 ;
        } else {
          this.error = 0;
          window.scroll(0, 0);
          this.seccion++;
        }
    } else if (this.seccion == 5) {
      if(this.quest3.preg17 === null ||
        this.quest3.preg18 === null ||
        this.quest3.preg19 === null ||
        this.quest3.preg20 === null ||
        this.quest3.preg21 === null ||
        this.quest3.preg22 === null  ){
          this.error = 1 ;
        } else {
          this.error = 0;
          window.scroll(0, 0);
          this.seccion++;
        }
    } else if (this.seccion == 6) {
      if(this.quest3.preg23 === null ||
        this.quest3.preg24 === null ||
        this.quest3.preg25 === null ||
        this.quest3.preg26 === null ||
        this.quest3.preg27 === null ||
        this.quest3.preg28 === null  ){
          this.error = 1 ;
        } else {
          this.error = 0;
          window.scroll(0, 0);
          this.seccion++;
        }
    } else if (this.seccion == 7) {
      if(this.quest3.preg29 === null ||
        this.quest3.preg30 === null  ){
          this.error = 1 ;
        } else {
          this.error = 0;
          window.scroll(0, 0);
          this.seccion++;
        }
    } else if (this.seccion == 8) {
      if(this.quest3.preg31 === null ||
        this.quest3.preg32 === null ||
        this.quest3.preg33 === null ||
        this.quest3.preg34 === null ||
        this.quest3.preg35 === null ||
        this.quest3.preg36 === null  ){
          this.error = 1 ;
        } else {
          this.error = 0;
          window.scroll(0, 0);
          this.seccion++;
        }
    } else if (this.seccion == 9) {
      if(this.quest3.preg37 === null ||
        this.quest3.preg38 === null ||
        this.quest3.preg39 === null ||
        this.quest3.preg40 === null ||
        this.quest3.preg41 === null  ){
          this.error = 1 ;
        } else {
          this.error = 0;
          window.scroll(0, 0);
          this.seccion++;
        }
    } else if (this.seccion == 10) {
      if(this.quest3.preg42 === null ||
        this.quest3.preg43 === null ||
        this.quest3.preg44 === null ||
        this.quest3.preg45 === null ||
        this.quest3.preg46 === null  ){
          this.error = 1 ;
        } else {
          this.error = 0;
          window.scroll(0, 0);
          this.seccion++;
        }
    } else if (this.seccion == 11) {
      if(this.quest3.preg47 === null ||
        this.quest3.preg48 === null ||
        this.quest3.preg49 === null ||
        this.quest3.preg50 === null ||
        this.quest3.preg51 === null ||
        this.quest3.preg52 === null ||
        this.quest3.preg53 === null ||
        this.quest3.preg54 === null ||
        this.quest3.preg55 === null ||
        this.quest3.preg56 === null  ){
          this.error = 1 ;
        } else {
          this.error = 0;
          window.scroll(0, 0);
          this.seccion++;
        }
    } else if (this.seccion == 12) {
      if(this.quest3.preg57 === null ||
        this.quest3.preg58 === null ||
        this.quest3.preg59 === null ||
        this.quest3.preg60 === null ||
        this.quest3.preg61 === null ||
        this.quest3.preg62 === null ||
        this.quest3.preg63 === null ||
        this.quest3.preg64 === null  ){
          this.error = 1 ;
        } else {
          this.error = 0;
          window.scroll(0, 0);
          this.seccion++;
        }
    } else if (this.seccion == 13) {
      if(this.quest3.preg65 === null ||
        this.quest3.preg66 === null ||
        this.quest3.preg67 === null ||
        this.quest3.preg68 === null  ){
          this.error = 1 ;
        } else {
          this.error = 0;
          window.scroll(0, 0);
          this.seccion++;
        }
    } else if (this.seccion == 14) {
      if(this.quest3.preg69 === null ||
        this.quest3.preg70 === null ||
        this.quest3.preg71 === null ||
        this.quest3.preg72 === null  ){
          this.error = 1 ;
        } else {
          this.error = 0;
          window.scroll(0, 0);
          this.seccion++;
          this. salir();
        }
    }
  }

  salir() {
    this.json = JSON.stringify(this.quest3);
    this.jsonSalida.emit(this.json);
  }

  clienteChange($event){
    if(this.serCliente == 0){
      this.quest3.preg65 = '0';
      this.quest3.preg66 = '0';
      this.quest3.preg67 = '0';
      this.quest3.preg68 = '0';
    }
  }

  jefeChange($event){
    if(this.esJefe == 0){
      this.quest3.preg69 = '0';
      this.quest3.preg70 = '0';
      this.quest3.preg71 = '0';
      this.quest3.preg72 = '0';
    }
  }

}