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
}
