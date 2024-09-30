import {Routes} from "@angular/router";
import {AllCategoriesComponent} from "./all-categories.component";

export const allCategoriesRouting: Routes = [
  {
    path: "",
    component: AllCategoriesComponent,
    children: [
      {
        path: '',
        redirectTo: "transport",
        pathMatch: "full",
      },
      {
        path: "transport",
        loadChildren: () =>
          import('./categories/transport/transport-routing').then((m) => m.transportRouting)
      },
      {
        path: "realty",
        loadChildren: () =>
          import('./categories/realty/realty-routing').then((m) => m.realtyRoutes)
      },
      {
        path: "services",
        loadChildren: () =>
          import('./categories/servises/servises-routing').then((m) => m.serverRoutes)
      },
      {
        path: "jobs",
        loadChildren: () =>
          import("./categories/jobs/jobs-routing").then((m) => m.jobsRoutes)
      },
      {
        path: "personal-items",
        loadChildren: () =>
          import("./categories/personal-items/personal-items-routing").then((m) => m.personalItemsRoutes)
      }
    ]
  }
]
