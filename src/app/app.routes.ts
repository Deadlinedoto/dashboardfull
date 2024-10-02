import { Routes } from '@angular/router';
import {AddComponent} from "./pages/add/add.component";
import {AllAddsComponent} from "./pages/all-adds/all-adds-component";
import {CreateAddComponent} from "./pages/create-add/create-add.component";
import {SettingProfileComponent} from "./pages/setting-profile/setting-profile.component";

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
    path: 'create-add',
    component: CreateAddComponent
  },
  {
    path: "setting-profile",
    component: SettingProfileComponent
  },
  {
    path: "all-categories",
    loadChildren: () => import("./pages/all-categories/all-categories-routing").then((m) => m.allCategoriesRouting)
  },




  {path: "**", component: AllAddsComponent}
];
