import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-personal-items',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './personal-items.component.html',
  styleUrl: './personal-items.component.scss'
})
export class PersonalItemsComponent {
  isShowCategories = true;
  showCategories(){
    this.isShowCategories = false;
  };
}
