import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public hero: string = 'ironman';
  public name: string = 'jhon stark';
  public age: number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescrription():string{
    return `${this.name} - ${this.age} `
  }

  changeHero():void{
      this.name = 'spiderman';
  }

  changeAge():void{
    this.age = 25;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45;
  }

}
