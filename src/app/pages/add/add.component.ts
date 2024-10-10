import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
  Input,
  OnInit,
  Output,
  signal
} from '@angular/core';
import {MainImageCarouselComponent} from "../../components/carusel/main-image-carousel/main-image-carousel.component";
import {MiniImagesLineComponent} from "../../components/carusel/mini-images-line/mini-images-line.component";
import {CaruselComponent} from "../../components/carusel/carusel.component";
import {toSignal} from "@angular/core/rxjs-interop";
import {Image, images$} from "../../../assets/all-images/carousel/images";
import {CommonModule} from "@angular/common";
import {ShowNumberDialogComponent} from "./show-number-dialog/show-number-dialog.component";
import {AddInterface} from "../../interfaces/add.interface";
import {ApiService} from "../../services/api.service";
import {AllAddsComponent} from "../all-adds/all-adds-component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [
    MainImageCarouselComponent,
    MiniImagesLineComponent,
    CaruselComponent,
    CommonModule,
    ShowNumberDialogComponent,
  ],
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddComponent implements OnInit{
  images = toSignal(images$);
  currentImage = signal<Image>({src: "", id: "", title: ""});

  public isVisiblePopup = false;
  public closeVisiblePopup = true
  public selectedProducts!: AddInterface
  public idSelectAdd!: string
  public mainImg!: [{}]

  constructor(private _api: ApiService, private _route: ActivatedRoute) {


    effect(() => {
        if (this.mainImg) {
          // this.currentImage.set('http://dzitskiy.ru:5000/Images/images');
        }
      },
      {allowSignalWrites: true},
    );
  }
  ngOnInit() {
    this._route.params.subscribe(params => {
      this.idSelectAdd = params['id'];
    })
    this.getSelectAdd(this.idSelectAdd)
    this.mainImg = this.selectedProducts.imagesIds;
  }
  setCurrentImage(image: Image) {
    this.currentImage.set(image);
  }
  showVisiblePopup() {
    this.isVisiblePopup = !this.isVisiblePopup
  }
  closeShowPopup(value: boolean) {
    this.isVisiblePopup = value
  }
  getSelectAdd(id: string) {
    this._api.getApiAdd(id).subscribe((resp) => {
      this.selectedProducts = resp
    })
  }


}

