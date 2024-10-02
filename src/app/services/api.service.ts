import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AddsAndSearch} from "../interfaces/adds-and-search.interface";
import {Observable} from "rxjs";
import {AddsRequest} from "../interfaces/adds-request.interface";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllAdds(): Observable<AddsRequest[]>{
    return this.http.post<AddsRequest[]>("http://dzitskiy.ru:5000/Advert/search", {})
  }
  getApiImg(body: string): Observable<any> {
    return this.http.get("http://dzitskiy.ru:5000/Images/" + body)
  }
  getApiAdd(id: string): Observable<any> {
    return this.http.get("http://dzitskiy.ru:5000/Advert/" + id)
  }
}

