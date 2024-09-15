import {Observable, of} from 'rxjs';


export interface Image {
  id : string;
  src : string;
  title : string;
}


export const images$: Observable<Image[]> = of ([
  {
    id: "1",
    title: "Основная картинка",
    src: "./assets/all-images/carousel/carousel-images/laptop1.png"
  },
  {
    id: "2",
    title: "Мини-1",
    src: "./assets/all-images/carousel/carousel-images/laptop2.png"
  },
  {
    id: "3",
    title: "Мини-2",
    src: "./assets/all-images/carousel/carousel-images/laptop3.png"
  },
  {
    id: "4",
    title: "Мини-3",
    src: "./assets/all-images/carousel/carousel-images/laptop4.png"
  },
  {
    id: "5",
    title: "Мини-4",
    src: "./assets/all-images/carousel/carousel-images/laptop5.png"
  }
])
