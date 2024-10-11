import { Injectable } from '@angular/core';
import { Animais } from '../components/Animais';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor() { }

  remove(lista: Animais[], animal: Animais) {
    return lista.filter((a)=> animal.nome !== a.nome);
  }
}
