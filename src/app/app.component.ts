import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {MainComponent} from "./components/main/main.component";
import {BodyComponent} from "./components/body/body.component";
import {MyAddsComponent} from "./components/my-adds/my-adds.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MainComponent, BodyComponent, MyAddsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboardfull';
}
