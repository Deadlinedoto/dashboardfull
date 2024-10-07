import {Component, computed, Input, input, OnInit} from '@angular/core';
import {CommonModule, NgStyle} from "@angular/common";
import {AddInterface} from "../../../interfaces/add.interface";

@Component({
  selector: 'app-main-image-carousel',
  standalone: true,
  imports: [
    NgStyle, CommonModule
  ],
  templateUrl: './main-image-carousel.component.html',
  styleUrl: './main-image-carousel.component.scss'
})
export class MainImageCarouselComponent {

  @Input() mainImg!: AddInterface
}
