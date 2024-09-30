import {Component, computed, input} from '@angular/core';
import {Image, images$} from "../../../../assets/all-images/carousel/images";
import {CommonModule, NgStyle} from "@angular/common";

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

  image = input.required<Image>()

  backgroundUrl = computed(() => {
    return {
      backgroundImage: `url(${this.image()?.src})`,
    }
  })
}
