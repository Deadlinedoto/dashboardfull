import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // constructor(private _http: HttpClient) {
  // }
  // public login(body): Observable<string> {
  //   return this._http.post<string>("http://dzitskiy.ru:5000/Auth/Login", body)
  // }
}
