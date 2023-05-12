import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'; //generar un identificador unico (com GUID de c#)

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addCharacter(character: Character):void {
    const newCharacter: Character = {id: uuid(),...character};
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(idCharacter: number): void {
  //   this.characters.splice(idCharacter,1);
  // }

  deleteCharacterById(idCharacter: string): void {
    this.characters = this.characters.filter( character => character.id !== idCharacter);
  }

}
