import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid'; //generar un identificador unico (com GUID de c#)

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      id: uuid(),
      name: 'Trunks',
      power: 10
    }
  ];

  emitDeleteCharacter(idCharacter?: string): void {

    if(!idCharacter) return; //si el valor de idCharacter es nulo no lo emito me retorno
    this.onDeleteCharacter.emit(idCharacter);

  }
}
