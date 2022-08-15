import { Component, OnInit } from '@angular/core';
import { IHeroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  arrHeroes?: IHeroe[];
  constructor(private heroesServices: HeroesService) { }

  ngOnInit(): void {
    this.heroesServices.getHeroes().subscribe(data => {
      this.arrHeroes = data;
      console.log(this.arrHeroes);
    })
  }


}
