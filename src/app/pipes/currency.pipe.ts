import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency',
  standalone: true
})
export class CurrencyPipe implements PipeTransform {

  transform(value: any, currency: string = 'RUB'): string {
    if (value === null || value === undefined) {
      return '';
    } else {
      const formatter = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 0,
      });
      return formatter.format(value);
    }
  }
}
