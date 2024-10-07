import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {PostComponent} from "../../components/posts/post/post.component";
import {NgForOf} from "@angular/common";
import {DataRowOutlet} from "@angular/cdk/table";
import {RouterLink} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {AddsRequest} from "../../interfaces/adds-request.interface";
import {AddInterface} from "../../interfaces/add.interface";

@Component({
  selector: 'app-all-adds',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf,
    DataRowOutlet,
    RouterLink
  ],
  templateUrl: './all-adds.component.html',
  styleUrl: './all-adds-component.scss'
})
export class AllAddsComponent implements OnInit {
  public products: AddsRequest[] = []
  constructor(private _api: ApiService) {
  }

  ngOnInit() {
    this._api.getAllAdds().subscribe((resp) => {
      this.products = resp
    })
  }

}
