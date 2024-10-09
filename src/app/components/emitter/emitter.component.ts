import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent {
  //propriedade
  meuNumero: number  = 0;


  onMudarNumero(){
   this.meuNumero = Math.floor(Math.random() * 1000)
  }
}
