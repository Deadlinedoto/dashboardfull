import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-transport',
  standalone: true,
    imports: [
        NgIf
    ],
  templateUrl: './transport.component.html',
  styleUrl: './transport.component.scss'
})
export class TransportComponent {
  isShowCategories1 = true;
  showCategories1(){
    this.isShowCategories1 = false;
  };
  isShowCategories2 = true;
  showCategories2(){
    this.isShowCategories2 = false;
  };
}
