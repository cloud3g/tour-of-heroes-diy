import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import {HeroService} from './hero.service';

//import { HEROES } from '../mock-heroes'; //方式1

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes: Hero[]; //数组
  //heroes = HEROES; //方式1

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
