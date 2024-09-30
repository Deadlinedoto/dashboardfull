import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterLink, CommonModule
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  isCategrs = true;
  changeImage() {
    this.isCategrs = !this.isCategrs;
  }
}
