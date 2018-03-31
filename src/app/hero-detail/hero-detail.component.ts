import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {


  constructor(private route:ActivatedRoute,private location:Location,private heroService:HeroService) { }
  
  hero:Hero;

  ngOnInit() {
    this.getHero();
  }
  
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => {
        this.hero = hero;
      });
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }

  goBack(){
    this.location.back();
  }

}
