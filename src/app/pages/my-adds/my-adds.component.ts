import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {AsyncPipe, NgForOf} from "@angular/common";
import {IDataUser} from "../../interfaces/dataUser.interface";
import {HttpClient} from "@angular/common/http";
import {PostComponent} from "../../components/posts/post/post.component";
import {Observable} from "rxjs";
import {AddsRequest} from "../../interfaces/adds-request.interface";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-my-adds',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf,
    AsyncPipe,
    PostComponent
  ],
  templateUrl: './my-adds.component.html',
  styleUrl: './my-adds.component.scss'
})
export class MyAddsComponent implements OnInit{
  userData: IDataUser
  products$: Observable<AddsRequest[]>;

  constructor(private _http: HttpClient, private _api: ApiService) {
  }


  ngOnInit() {
    this._http.get<IDataUser>("http://dzitskiy.ru:5000/Users/current")
      .subscribe((resp) => {
        console.log(resp)
        this.userData = resp
      })
    this.products$ = this._api.getAllAdds()
  }
}
