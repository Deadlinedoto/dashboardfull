import {ChangeDetectorRef, Component, OnInit, Output} from '@angular/core';
import {PostComponent} from "../../components/posts/post/post.component";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {DataRowOutlet} from "@angular/cdk/table";
import {RouterLink} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {AddsRequest} from "../../interfaces/adds-request.interface";
import {AddInterface} from "../../interfaces/add.interface";
import {map, Observable} from "rxjs";
import {SearchPipe} from "../../pipes/search.pipe";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-all-adds',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf,
    DataRowOutlet,
    RouterLink,
    AsyncPipe,
    NgIf,
    SearchPipe
  ],
  templateUrl: './all-adds.component.html',
  styleUrl: './all-adds-component.scss'
})
export class AllAddsComponent implements OnInit {
  products$: Observable<AddsRequest[]>;
  searchTerm: string = '';
  constructor(private _api: ApiService, private searchService: SearchService) {
  }

  ngOnInit() {
    this.products$ = this._api.getAllAdds().pipe(
      map((products: AddsRequest[]) => {
        return products.filter((product) => product.name.toLowerCase().includes(this.searchService.searchTerm.toLowerCase()));
      })
    );
  }
}
