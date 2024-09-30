import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {
  isShowCategories1 = true;
  showCategories1(){
    this.isShowCategories1 = false;
  };
  isShowCategories2 = true;
  showCategories2(){
    this.isShowCategories2 = false;
  };
}
