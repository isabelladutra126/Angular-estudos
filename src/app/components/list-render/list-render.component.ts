import { Component } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  lista = [
    {name: 'auau', type: 'cachorro'},
    {name: 'miau', type: 'gato'},
    {name: 'lobinho', type: 'lobo'},
  ]

}
""