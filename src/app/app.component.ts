import {Component} from '@angular/core';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {MainComponent} from "./components/main/main.component";
import {AllAddsComponent} from "./pages/all-adds/all-adds-component";
import {MyAddsComponent} from "./pages/my-adds/my-adds.component";
import {PostComponent} from "./components/posts/post/post.component";
import {CaruselComponent} from "./components/carusel/carusel.component";
import {MainImageCarouselComponent} from "./components/carusel/main-image-carousel/main-image-carousel.component";
import {MiniImagesLineComponent} from "./components/carusel/mini-images-line/mini-images-line.component";
import {AddComponent} from "./pages/add/add.component";
import {ShowNumberDialogComponent} from "./pages/add/show-number-dialog/show-number-dialog.component";
import {AllCategoriesComponent} from "./pages/all-categories/all-categories.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MainComponent,
    MyAddsComponent,
    PostComponent,
    CaruselComponent,
    MainImageCarouselComponent,
    MiniImagesLineComponent,
    AllAddsComponent,
    AddComponent,
    ShowNumberDialogComponent,
    RouterModule,
    RouterLink, AllCategoriesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboardfull';

}

