import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  informacion: any[] = [];
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.mostrarInformacion();
  }

  mostrarInformacion(){
    this.paisService.getInformacion().subscribe(data => {
      this.informacion = data;
    })
  }

}
