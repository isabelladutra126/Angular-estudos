import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css'
})
export class EventosComponent {
  show : boolean = false;
  notshow(): void{
    //toggle 
    this.show = !this.show;
  }  
}
