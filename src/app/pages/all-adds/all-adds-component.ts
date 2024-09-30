import { Component } from '@angular/core';
import {PostComponent} from "../../components/posts/post/post.component";
import {ProductCard} from "../../interfaces/product-card.interface";
import {NgForOf} from "@angular/common";
import {DataRowOutlet} from "@angular/cdk/table";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-all-adds',
  standalone: true,
  imports: [
    PostComponent,
    NgForOf,
    DataRowOutlet,
    RouterLink
  ],
  templateUrl: './all-adds.component.html',
  styleUrl: './all-adds-component.scss'
})
export class AllAddsComponent {
  public products: ProductCard[] = [
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img1.png",
      name: "Гитара Fender",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    },
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img2.png",
      name: "Гитара Yamaha",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    },
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img1.png",
      name: "Гитара Fender",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    },
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img2.png",
      name: "Гитара Fender",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    },
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img2.png",
      name: "Гитара Fender",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    },
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img1.png",
      name: "Гитара Fender",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    },
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img2.png",
      name: "Гитара Fender",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    },
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img1.png",
      name: "Гитара Fender",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    },
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img1.png",
      name: "Гитара Fender",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    },
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img2.png",
      name: "Гитара Fender",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    },
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img1.png",
      name: "Гитара Fender",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    },
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img2.png",
      name: "Гитара Fender",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    },
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img2.png",
      name: "Гитара Fender",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    },
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img1.png",
      name: "Гитара Fender",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    },
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img2.png",
      name: "Гитара Fender",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    },
    {
      id: "",
      img: "assets/all-images/main-imgs/main-img1.png",
      name: "Гитара Fender",
      price: "20.000",
      address: "Москва, Ленинский проспект",
      date: new Date
    }
  ]
}
