import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICreateAdd} from "../interfaces/create-add.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private _httpClient: HttpClient) { }

  public getCategories(): Observable<any> {
    return this._httpClient.get("http://dzitskiy.ru:5000/Categories");
  }
  public createAd(model: any): Observable<any> {
    return this._httpClient.post("http://dzitskiy.ru:5000/Advert", model);
  }

}
