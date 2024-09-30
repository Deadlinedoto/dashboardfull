import { Component } from '@angular/core';
import {CategoriesComponent} from "./categories/categories.component";
import {Router, RouterOutlet} from "@angular/router";
import {TransportComponent} from "./categories/transport/transport.component";
import {RealtyComponent} from "./categories/realty/realty.component";
import {JobsComponent} from "./categories/jobs/jobs.component";
import {ServisesComponent} from "./categories/servises/servises.component";

@Component({
  selector: 'app-all-categories',
  standalone: true,
  imports: [
    CategoriesComponent,
    RouterOutlet,
    TransportComponent,
    RealtyComponent,
    JobsComponent,
    ServisesComponent,
  ],
  templateUrl: './all-categories.component.html',
  styleUrl: './all-categories.component.scss'
})
export class AllCategoriesComponent {
  constructor(
    private _router: Router,

  ) {
  }
  public allCategories() {}
}


