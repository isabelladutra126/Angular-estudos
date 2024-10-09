import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent implements OnInit{
  name: string = " Isabella";
  age: number = 21;
  job = "programadora"
  //lista
  hobbies = ['comer', 'dormir', 'estudar'];
  //objeto
  musicas = {
    rock: "metallica",
    pop: "doja cat"
  }



  constructor () {}

  ngOnInit(): void {
      
  }
}
