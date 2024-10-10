import { Injectable } from '@angular/core';
import { Animais } from '../components/Animais';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  remove(Animais: Animais[], animal: Animais){
    return Animais.filter((a) => animal.nome !== a.nome);
  }
}
