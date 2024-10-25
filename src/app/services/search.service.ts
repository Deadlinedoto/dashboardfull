import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private _searchTerm = '';
  private _api: ApiService;

  get searchTerm() {
    return this._searchTerm;
  }

  set searchTerm(value) {
    this._searchTerm = value;
    this._api.getAllAdds().subscribe((products) => {
      console.log(products);
    });
  }
}
