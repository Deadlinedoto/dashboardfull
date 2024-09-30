import { Routes } from '@angular/router';
import {AddComponent} from "./pages/add/add.component";
import {AllAddsComponent} from "./pages/all-adds/all-adds-component";

export const routes: Routes = [
  {
    path: "",
    component: AllAddsComponent
  },
  {
    path: 'selected-add',
    component: AddComponent
  },
  {
    path: "all-categories",
    loadChildren: () => import("./pages/all-categories/all-categories-routing").then((m) => m.allCategoriesRouting)
  },




  {path: "**", component: AllAddsComponent}
];
