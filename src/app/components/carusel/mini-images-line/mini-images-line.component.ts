import {Component, Input, input, OnInit, output} from '@angular/core';
import {CommonModule, NgClass, NgStyle} from "@angular/common";
import {Image, images$} from "../../../../assets/all-images/carousel/images";
import {AddInterface} from "../../../interfaces/add.interface";

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
export class MiniImagesLineComponent implements OnInit {
  ngOnInit() {
    console.log(this.miniImg)
  }

  @Input() miniImg!: AddInterface
  changeCurrent = output<AddInterface>();

  setCurrentImage(image: AddInterface) {
    this.changeCurrent.emit(image);
  }

  protected readonly images$ = images$;
}
