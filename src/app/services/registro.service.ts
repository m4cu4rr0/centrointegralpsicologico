import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EncuestaModel} from '../model/encuesta.model';
import {switchMap, take, tap, map} from 'rxjs/internal/operators';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {PersonaModel} from '../model/persona.model';

interface EncuestaData {
  id: string;
  idEmpresa: string;
  numPersonas: number;
  quest1: boolean;
  quest2: boolean;
  quest3: boolean;
}

interface PersonaData {
  nombre: string;
  edad: string;
  sexo: string;
  edoCivil: string;
  estudios: string;
  ocupacion: string;
  departamento: string;
  puesto: string;
  contratacion: string;
  personal: string;
  jornada: string;
  rotacion: string;
  expActual: string;
  expTotal: string;
  folio: string;
  quest1: string;
  quest2: string;
  quest3: string;
  atencionQ1: boolean;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  uniqueId: string;

  private encuestas = new BehaviorSubject<EncuestaModel[]>([]);
  private personas = new BehaviorSubject<PersonaModel[]>([]);

  getEncuestas(): Observable<EncuestaModel[]> {
    return this.encuestas.asObservable();
  }

  getPersonas(): Observable<PersonaModel[]> {
    return this.personas.asObservable();
  }

  getEncuesta(id: string) {
    return this.encuestas.pipe(
      take(1),
      map(encuestas => {
        return {...encuestas.find(p => p.id === id)};
      })
    );
  }

  async agregarEncuesta(encuesta: EncuestaModel) {
    // console.log(encuesta);
    return await this.http.post<{ name: string }>('https://consultoriacpi.firebaseio.com/encuestas.json', {
      ...encuesta,
      id: null
    })
      .pipe(
        switchMap(resData => {
          this.uniqueId = resData.name as string;
          // console.log(this.uniqueId);
          return this.uniqueId;
        })
      ).toPromise();
  }

  async fetchEncuestas() {
    return await this.http
      .get<{ [key: string]: EncuestaData }>('https://consultoriacpi.firebaseio.com/encuestas.json')
      .pipe(map(resData => {
          const encuestas = [];

          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              encuestas.push(new EncuestaModel(
                key,
                resData[key].idEmpresa,
                resData[key].numPersonas,
                resData[key].quest1,
                resData[key].quest2,
                resData[key].quest3));
            }
          }

          return encuestas;
        }),
        tap(encuestas => {
          this.encuestas.next(encuestas);
        })
      ).toPromise();
  }

  async agregarPersona(persona: PersonaModel) {
    console.log(persona);
    return await this.http.post<{ name: string }>('https://consultoriacpi.firebaseio.com/personas.json', {
      ...persona,
      id: null
    })
      .pipe(
        switchMap(resData => {
          this.uniqueId = resData.name as string;
          // console.log(this.uniqueId);
          return this.uniqueId;
        })
      ).toPromise();
  }

  async personasFolio(folio: string) {
    return await this.http
      .get<{ [key: string]: PersonaData }>('https://consultoriacpi.firebaseio.com/personas.json')
      .pipe(map(resData => {
          const personas = [];

          for (const key in resData) {
            if (resData.hasOwnProperty(key)) {
              if (resData[key].folio === folio) {
                personas.push(new PersonaModel(
                  resData[key].nombre,
                  resData[key].edad,
                  resData[key].sexo,
                  resData[key].edoCivil,
                  resData[key].estudios,
                  resData[key].ocupacion,
                  resData[key].departamento,
                  resData[key].puesto,
                  resData[key].contratacion,
                  resData[key].personal,
                  resData[key].jornada,
                  resData[key].rotacion,
                  resData[key].expActual,
                  resData[key].expTotal,
                  resData[key].folio,
                  resData[key].quest1,
                  resData[key].quest2,
                  resData[key].quest3,
                  resData[key].atencionQ1,
                  key));
              }
            }
          }

          return personas;
        }),
        tap(personas => {
          this.personas.next(personas);
        })
      ).toPromise();
  }


  constructor(private http: HttpClient) { }
}
