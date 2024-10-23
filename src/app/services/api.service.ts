import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AddsAndSearch} from "../interfaces/adds-and-search.interface";
import {Observable} from "rxjs";
import {AddsRequest} from "../interfaces/adds-request.interface";
import {Registration} from "../interfaces/registration.interface";
import {AddInterface} from "../interfaces/add.interface";
import {UsersInterface} from "../interfaces/users.interface";

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
  getApiAdd(id: string): Observable<AddInterface> {
    return this.http.get<AddInterface>("http://dzitskiy.ru:5000/Advert/" + id)
  }
  getRegistration(): Observable<Registration[]> {
    return this.http.post<Registration[]>("http://dzitskiy.ru:5000/Auth/Register", {})
  }

}

