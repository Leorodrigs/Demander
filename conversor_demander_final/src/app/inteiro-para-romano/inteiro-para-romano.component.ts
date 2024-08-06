import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inteiro-para-romano',
  templateUrl: './inteiro-para-romano.component.html',
  styleUrls: ['./inteiro-para-romano.component.css'],
})
export class InteiroParaRomanoComponent {
  inteiro: number | null = null;
  resultado: string | null = null;
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  converter() {
    this.errorMessage = null;

    try {
      if (this.inteiro === null || this.inteiro <= 0 || this.inteiro > 4999) {
        throw new Error('O valor deve estar entre 1 e 4999.');
      }

      const convertedResult = this.convertIntegerToRoman(this.inteiro);
      this.resultado = `Resultado: ${convertedResult}`;
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.errorMessage = error.message;
      } else {
        this.errorMessage = 'Ocorreu um erro desconhecido.';
      }
    }
  }

  convertIntegerToRoman(num: number): string {
    const values: number[] = [
      1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1,
    ];
    const symbols: string[] = [
      'M',
      'CM',
      'D',
      'CD',
      'C',
      'XC',
      'L',
      'XL',
      'X',
      'IX',
      'V',
      'IV',
      'I',
    ];

    let result = '';

    for (let i = 0; i < values.length; i++) {
      while (num >= values[i]) {
        result += symbols[i];
        num -= values[i];
      }
    }

    return result;
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
