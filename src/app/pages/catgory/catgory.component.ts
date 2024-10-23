import {Component, inject, OnInit} from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {CommonModule, NgForOf} from "@angular/common";
import {CategoryInterface} from "../../interfaces/category.interface";
import {HttpClient} from "@angular/common/http";
import { tap } from 'rxjs';

@Component({
  selector: 'app-catgory',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule,
  ],
  templateUrl: './catgory.component.html',
  styleUrl: './catgory.component.scss'
})
export class CatgoryComponent implements OnInit {
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
            if(value.parentId === "00000000-0000-0000-0000-000000000000"){
              this.parentCategoryes.push(value)
              console.log(this.parentCategoryes)
            }}
          )
        })
      )
    )
      .subscribe()
  }
}
