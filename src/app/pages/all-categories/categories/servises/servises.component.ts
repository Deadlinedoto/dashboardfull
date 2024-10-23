import {Component, OnInit} from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";
import {CategoryInterface} from "../../../../interfaces/category.interface";
import {CategoryService} from "../../../../services/category.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-servises',
  standalone: true,
  imports: [
    NgIf, CommonModule
  ],
  templateUrl: './servises.component.html',
  styleUrl: './servises.component.scss'
})
export class ServisesComponent implements OnInit {
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
            if(value.parentId === "52946075-5c48-4edf-95d0-e0c0a207a04c"){
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
