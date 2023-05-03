import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroesName: string[] = ['Spidermna', 'Hulk', 'She Hulk','Thor'];
  public deletedHeroe?: string


  removeLastHeroe(): void{
    this.deletedHeroe = this.heroesName.pop();
  }

}
