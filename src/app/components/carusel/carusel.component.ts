import {ChangeDetectionStrategy, Component, computed, effect, Input, input, OnInit, signal} from '@angular/core';
import {Image} from "../../../assets/all-images/carousel/images";
import {CommonModule, NgClass} from "@angular/common";
import {MainImageCarouselComponent} from "./main-image-carousel/main-image-carousel.component";
import {GalleriaModule} from "primeng/galleria";
import {AddInterface} from "../../interfaces/add.interface";
import {FormsModule} from "@angular/forms";
import {StyleClassModule} from "primeng/styleclass";

@Component({
  selector: 'app-carusel',
  standalone: true,
  imports: [
    NgClass,
    MainImageCarouselComponent,
    CommonModule,
    FormsModule,
    GalleriaModule,
    StyleClassModule,
  ],
  templateUrl: './carusel.component.html',
  styleUrl: './carusel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaruselComponent implements OnInit {
  @Input() miniImg!: AddInterface

  images: any[] | undefined;

  ngOnInit() {
    this.images = this.miniImg.imagesIds.map(value => value)
    console.log('Ошибка', this.images);
  }
}
