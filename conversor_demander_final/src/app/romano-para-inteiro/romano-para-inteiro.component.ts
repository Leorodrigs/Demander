import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-romano-para-inteiro',
  templateUrl: './romano-para-inteiro.component.html',
  styleUrls: ['./romano-para-inteiro.component.css'],
})
export class RomanoParaInteiroComponent {
  romano: string = '';
  resultado: string | null = null;
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  converter() {
    this.errorMessage = null;

    try {
      if (!this.romano) {
        throw new Error('O valor romano não pode estar vazio.');
      }

      const convertedResult = this.convertRomanToInteger(this.romano);
      this.resultado = `Resultado: ${convertedResult}`;
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.errorMessage = error.message;
      } else {
        this.errorMessage = 'Ocorreu um erro desconhecido.';
      }
    }
  }

  convertRomanToInteger(romano: string): string {
    const romanToInteger: { [key: string]: number } = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000,
    };

    let result = 0;
    let previousValue = 0;

    for (let i = romano.length - 1; i >= 0; i--) {
      const currentValue = romanToInteger[romano[i]];
      if (currentValue < previousValue) {
        result -= currentValue;
      } else {
        result += currentValue;
      }
      previousValue = currentValue;
    }

    return result > 0 ? result.toString() : 'Valor inválido';
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
