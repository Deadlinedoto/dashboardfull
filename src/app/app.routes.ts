import { Routes } from '@angular/router';
import {AddComponent} from "./pages/add/add.component";
import {AllAddsComponent} from "./pages/all-adds/all-adds-component";
import {CreateAddComponent} from "./pages/create-add/create-add.component";
import {SettingProfileComponent} from "./pages/setting-profile/setting-profile.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {LoginComponent} from "./components/header/login/login.component";
import {MyAddsComponent} from "./pages/my-adds/my-adds.component";
import {MyProfileComponent} from "./pages/my-profile/my-profile.component";
import {CatgoryComponent} from "./pages/catgory/catgory.component";

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
    path: "my-profile",
    component: MyProfileComponent
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "my-add",
    component: MyAddsComponent,
  },
  {
    path: "all-categories",
    loadChildren: () => import("./pages/all-categories/all-categories-routing").then((m) => m.allCategoriesRouting)
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "catgory",
    component: CatgoryComponent
  },




  {path: "**", component: AllAddsComponent}
];
