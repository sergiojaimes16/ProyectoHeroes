import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IPersona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

usuario$: Subject<IPersona>;

  constructor() { 
    this.usuario$ = new Subject();
  }

  getUsuario$(): Observable<IPersona>{
    return this.usuario$.asObservable();
  }

  login(persona:IPersona){
    this.usuario$.next(persona);
  }
}
