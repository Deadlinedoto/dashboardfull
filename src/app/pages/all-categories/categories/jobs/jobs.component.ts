import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {CategoryInterface} from "../../../../interfaces/category.interface";
import {CategoryService} from "../../../../services/category.service";
import {tap} from "rxjs";

@Component({
  selector: 'app-jobs',
  standalone: true,
    imports: [
        NgIf,
        NgForOf
    ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent implements OnInit {
  categoryes: CategoryInterface[];
  parentCategoryes: CategoryInterface[] = [];

  constructor(private _categoryService: CategoryService) {}


  ngOnInit(): void {
    this._categoryService.getCategories().pipe(
      tap(
        (resp => {
          console.log(resp)
          this.categoryes = resp;
          resp.map(value => {
            if(value.parentId === "16d3d97c-27df-4ee4-8452-b0f4ccc79532"){
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
