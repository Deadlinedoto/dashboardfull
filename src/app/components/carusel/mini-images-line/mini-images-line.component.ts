import {Component, input, output} from '@angular/core';
import {CommonModule, NgClass, NgStyle} from "@angular/common";
import {Image} from "../../../../assets/all-images/carousel/images";

@Component({
  selector: 'app-mini-images-line',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    CommonModule
  ],
  templateUrl: './mini-images-line.component.html',
  styleUrl: './mini-images-line.component.scss'
})
export class MiniImagesLineComponent {
  images = input<Image[]>();
  changeCurrent = output<Image>();

  activeId = input.required<string>();

  setCurrentImage(image: Image) {
    this.changeCurrent.emit(image);
  }
}
