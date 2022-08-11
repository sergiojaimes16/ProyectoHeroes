import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http:HttpClient) { }

  getPaises(){
    return this.http.get<any[]>('https://restcountries.com/v2/lang/es');
  }

  getInformacion(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
