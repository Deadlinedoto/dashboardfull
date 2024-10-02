import {Component, EventEmitter, Input, OnInit, Output, output} from '@angular/core';
import {ProductCard} from "../../../interfaces/product-card.interface";
import {CommonModule, CurrencyPipe, DatePipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AddsRequest} from "../../../interfaces/adds-request.interface";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink,
    CurrencyPipe,
    CommonModule
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent{
  @Input() product!: AddsRequest
  @Output() getSelectAdd = new EventEmitter()
  constructor() {
  }
  getSelectProduct(id: string) {
    this.getSelectAdd.emit(id);
  }

}
