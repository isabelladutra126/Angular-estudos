import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mudar-numero',
  templateUrl: './mudar-numero.component.html',
  styleUrl: './mudar-numero.component.css'
})
export class MudarNumeroComponent {
  @Output() mudarNumero : EventEmitter<any> = new EventEmitter;

  onClick (){
    this.mudarNumero.emit();
  }

}
