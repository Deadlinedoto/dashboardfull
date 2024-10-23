import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, DatePipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {AddsRequest} from "../../../interfaces/adds-request.interface";
import {AddInterface} from "../../../interfaces/add.interface";
import {CurrencyPipe} from "../../../pipes/currency.pipe";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    DatePipe,
    RouterLink,
    CommonModule,
    CurrencyPipe
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
