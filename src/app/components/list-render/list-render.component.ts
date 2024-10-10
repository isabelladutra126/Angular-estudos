import { Component, OnInit } from '@angular/core';
import { Animais } from '../Animais';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent implements OnInit {
  lista: Animais[] = [
    {nome: 'auau', tipo: 'cachorro', idade: 1},
    {nome: 'miau', tipo: 'gato', idade: 2},
    {nome: 'lobinho', tipo: 'lobo', idade: 6},
  ]

  constructor (private listService: ListService){}

  ngOnInit(): void {}

  detalhesAnimal = "";

  showAge (animal: Animais){
  this.detalhesAnimal = `O animal ${animal.nome} tem ${animal.idade} ano(s)`;
  } 

  removeAnimal (animal: Animais){
    console.log("removendo animal");
    this.lista = this.listService.remove(this.lista, animal);
  }
}


