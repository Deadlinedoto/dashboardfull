import {Component, effect, signal} from '@angular/core';
import {MainImageCarouselComponent} from "../../components/carusel/main-image-carousel/main-image-carousel.component";
import {MiniImagesLineComponent} from "../../components/carusel/mini-images-line/mini-images-line.component";
import {CaruselComponent} from "../../components/carusel/carusel.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {Image, images$} from "../../../assets/all-images/carousel/images";
import {CommonModule} from "@angular/common";
import {ShowNumberDialogComponent} from "./show-number-dialog/show-number-dialog.component";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    MainImageCarouselComponent,
    MiniImagesLineComponent,
    CaruselComponent,
    CommonModule,
    ShowNumberDialogComponent
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  images = toSignal(images$);

  currentImage = signal<Image>({src: "", id: "", title: ""});

  isVisiblePopup = false;

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
  setFirstImage() {
    const images = this.images();
    if (images && images.length > 0) {
      this.currentImage.set(images[0]);
    }
  };

  setCurrentImage(image: Image) {
    this.currentImage.set(image);
  }
  showVisiblePopup() {
    this.isVisiblePopup = !this.isVisiblePopup
  }
}

