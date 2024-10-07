import { Routes } from '@angular/router';
import {AddComponent} from "./pages/add/add.component";
import {AllAddsComponent} from "./pages/all-adds/all-adds-component";
import {CreateAddComponent} from "./pages/create-add/create-add.component";
import {SettingProfileComponent} from "./pages/setting-profile/setting-profile.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {LoginComponent} from "./components/login/login.component";
import {MyAddsComponent} from "./pages/my-adds/my-adds.component";

export const routes: Routes = [
  {
    path: "",
    component: AllAddsComponent
  },
  {
    path: 'selected-add/:id',
    component: AddComponent
  },
  {
    path: 'create-add',
    component: CreateAddComponent
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "my-add",
    component: MyAddsComponent
  },
  {
    path: "all-categories",
    loadChildren: () => import("./pages/all-categories/all-categories-routing").then((m) => m.allCategoriesRouting)
  },
  {
    path: "registration",
    component: RegistrationComponent
  },




  {path: "**", component: AllAddsComponent}
];
