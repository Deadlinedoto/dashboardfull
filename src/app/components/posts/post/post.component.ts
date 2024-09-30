import {Component, Input} from '@angular/core';
import {ProductCard} from "../../../interfaces/product-card.interface";
import {CurrencyPipe, DatePipe} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink,
    CurrencyPipe
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  @Input() product!: ProductCard
  constructor() {
  }
}
