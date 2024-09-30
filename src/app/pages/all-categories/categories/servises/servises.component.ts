import { Component } from '@angular/core';
import {CommonModule, NgIf} from "@angular/common";

@Component({
  selector: 'app-servises',
  standalone: true,
  imports: [
    NgIf, CommonModule
  ],
  templateUrl: './servises.component.html',
  styleUrl: './servises.component.scss'
})
export class ServisesComponent {
  isShowCategories1 = true;
  showCategories1(){
    this.isShowCategories1 = false;
  };
  isShowCategories2 = true;
  showCategories2(){
    this.isShowCategories2 = false;
  };
  isShowCategories3 = true;
  showCategories3(){
    this.isShowCategories3 = false;
  };
  isShowCategories4 = true;
  showCategories4(){
    this.isShowCategories4 = false;
  };
  isShowCategories5 = true;
  showCategories5(){
    this.isShowCategories5 = false;
  };
  isShowCategories6 = true;
  showCategories6(){
    this.isShowCategories6 = false;
  };
  isShowCategories7 = true;
  showCategories7(){
    this.isShowCategories7 = false;
  };
}
