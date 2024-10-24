import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephoneNumber',
  standalone: true
})
export class TelephoneNumberPipe implements PipeTransform {
  transform(value: string): string {
    // Проверка формата номера
    if (!value.startsWith('+7') && !value.startsWith('8')) {
      return value; // Если номер не начинается с +7 или 8, возвращаем его без изменений
    }

    // Удаление лишних символов
    value = value.replace(/[^0-9+]/g, '');

    // Добавление недостающих символов
    if (value.length === 11) {
      value = `+7 (${value})`; // Добавляем код страны и круглые скобки
    } else if (value.length > 11 && value.length < 14) {
      const cityCode = value.slice(0, 2);
      const subscriberNumber = value.slice(2, 5);
      const firstGroup = value.slice(5, 8);
      const midGroup = value.slice(8, 10);
      const lastGroup = value.slice(10, 12);

      value = `${cityCode}(${subscriberNumber})-${firstGroup}-${midGroup}-${lastGroup}`; // Разделяем номер на части и добавляем круглые скобки вокруг кода абонента
    }

    return value;
  }
}
