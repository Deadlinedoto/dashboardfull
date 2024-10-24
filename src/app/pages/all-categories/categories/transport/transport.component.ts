import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {CategoryInterface} from "../../../../interfaces/category.interface";
import {CategoryService} from "../../../../services/category.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-transport',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.scss'
})
export class TransportComponent implements OnInit {
  categoryes: CategoryInterface[];
  subcategoriesVisible = false;
  parentCategoryes: CategoryInterface[] = [];

  constructor(private _categoryService: CategoryService) {}


  ngOnInit(): void {
    this._categoryService.getCategories().pipe(
      tap(
        (resp => {
          console.log(resp)
          this.categoryes = resp;
          resp.map(value => {
            if(value.parentId === "093abb80-a4e9-48d0-b602-6392c2dfd348"){
              this.parentCategoryes.push(value)
              console.log(this.parentCategoryes)
            }}
          )
        })
      )
    )
      .subscribe()
  }
  showId(id: string) {
    console.log(id)
  }

}
