import {ChangeDetectionStrategy, Component, computed, effect, input, signal} from '@angular/core';
import {Image} from "../../../assets/all-images/carousel/images";
import {NgClass} from "@angular/common";
import {MainImageCarouselComponent} from "./main-image-carousel/main-image-carousel.component";

@Component({
  selector: 'app-carusel',
  standalone: true,
  imports: [
    NgClass,
    MainImageCarouselComponent
  ],
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaruselComponent {
  images = input<Image[] | undefined>();

  currentImage = signal<Image>({src: "", id: "", title: ""});

  setFirstImage() {
    const images = this.images();
    if (images && images.length > 0) {
      this.currentImage.set(images[0]);
    }
  };

  constructor() {
    effect(() => {
      const images = this.images();
      if (images && images.length > 0) {
        this.currentImage.set(images[0]);
      }
    },
      {allowSignalWrites: true},
      );
  }

  setCurrentImage(image: Image) {
    this.currentImage.set(image)
  }
}
