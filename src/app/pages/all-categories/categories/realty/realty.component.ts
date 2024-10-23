import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CategoryInterface} from "../../../../interfaces/category.interface";
import {CategoryService} from "../../../../services/category.service";
import {tap} from "rxjs";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-realty',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './realty.component.html',
  styleUrl: './realty.component.scss'
})
export class RealtyComponent implements OnInit {
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
            if(value.parentId === "b2b2e507-d766-445e-a453-56c45a064395"){
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
