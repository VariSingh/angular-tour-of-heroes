import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  
  selectedHero:Hero;
  heroes:Hero[];

  getHeroes(): void {
    this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
  }

  add(name:string):void{
   name = name.trim();
   if(!name){ return; }
   this.heroService.addHero({name} as Hero)
   .subscribe(hero => {
     console.log("hero ",hero);
     this.heroes.push(hero);
   })
  }

  delete(hero:Hero):void{
     let heroes = this.heroes.filter(function(h){
        h !==hero;
     })
    console.log("heroes ",heroes);
    this.heroService.deleteHero(hero).subscribe();
  }
  

  ngOnInit() {
    this.getHeroes();
  }

}
