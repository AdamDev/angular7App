import { Component, OnInit } from '@angular/core';
import {Hero} from '../models/hero';
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-adam',
  templateUrl: './adam.component.html',
  styleUrls: ['./adam.component.css']
})
export class AdamComponent implements OnInit {
  heroes : Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
