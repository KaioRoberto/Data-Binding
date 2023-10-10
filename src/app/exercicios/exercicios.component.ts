import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.scss']
})
export class ExerciciosComponent {
  saudacao = 'Olá, mundo!';
  linkAncora = 'https://www.uninassau.edu.br';
  backgroundColor: string = 'white';
  fontColor: string = 'black';
  clickedBackgroundColor: string = 'red';
  clickedFontColor: string = 'blue';
  selectedOption: string = 'option1';

  constructor() {}

  changeColor() {
    this.backgroundColor = this.clickedBackgroundColor;
    this.fontColor = this.clickedFontColor;
  }
}
