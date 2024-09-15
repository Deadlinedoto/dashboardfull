import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {MainComponent} from "./components/main/main.component";
import {BodyComponent} from "./components/body/body.component";
import {MyAddsComponent} from "./components/my-adds/my-adds.component";
import {Post1Component} from "./components/posts/post-1/post-1.component";
import {Post2Component} from "./components/posts/post-2/post-2.component";
import {Post3Component} from "./components/posts/post-3/post-3.component";
import {Post4Component} from "./components/posts/post-4/post-4.component";
import {Post5Component} from "./components/posts/post-5/post-5.component";
import {Post6Component} from "./components/posts/post-6/post-6.component";
import {Post7Component} from "./components/posts/post-7/post-7.component";
import {Post8Component} from "./components/posts/post-8/post-8.component";
import {Post9Component} from "./components/posts/post-9/post-9.component";
import {Post10Component} from "./components/posts/post-10/post-10.component";
import {Post11Component} from "./components/posts/post-11/post-11.component";
import {Post12Component} from "./components/posts/post-12/post-12.component";
import {Post13Component} from "./components/posts/post-13/post-13.component";
import {Post14Component} from "./components/posts/post-14/post-14.component";
import {Post15Component} from "./components/posts/post-15/post-15.component";
import {Post16Component} from "./components/posts/post-16/post-16.component";
import {CaruselComponent} from "./components/carusel/carusel.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {images$} from "../assets/all-images/carousel/images";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, BodyComponent, MyAddsComponent, Post1Component, Post2Component, Post3Component, Post4Component, Post5Component, Post6Component, Post7Component, Post8Component, Post9Component, Post10Component, Post11Component, Post12Component, Post13Component, Post14Component, Post15Component, Post16Component, CaruselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboardfull';
  images = toSignal(images$)
}
