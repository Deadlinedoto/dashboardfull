import { Pipe, PipeTransform } from '@angular/core';
import {AddsRequest} from "../interfaces/adds-request.interface";

@Pipe({
  name: 'filterAds',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(products: AddsRequest[], search: string): AddsRequest[] {
    return products.filter(p => {p.name.toLowerCase().includes(search.toLowerCase())});
  }

}
