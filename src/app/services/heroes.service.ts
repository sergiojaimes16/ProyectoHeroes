import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IHeroe } from '../interfaces/heroe.interface';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  
  heroes:IHeroe[] = [{
    nombre: "Daredevil",
    descripcion: "Soy un heroe",
    imagen: "assets/img/daredevil.png",
    aparicion: "Año 1990",
    casa: "Marvel"
  }]
  private heroes$: Subject<IHeroe[]>;

  constructor() { 
    this.heroes$ = new Subject();
  }

  agregarHeroe(pHeroe: IHeroe){
    this.heroes.push(pHeroe);
    this.heroes$.next(this.heroes);
  }

  getHeroes(): Observable<IHeroe[]>{
    return this.heroes$.asObservable();
  }




 
}
