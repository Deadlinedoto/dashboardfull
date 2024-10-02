import {CategoryInterface} from "../interfaces/category.interface";
import {Observable, of} from "rxjs";

const categories$: Observable<CategoryInterface[]> = of([
  {
    id: 1,
    name: "Животные",
    children: [
      {
        id: 1,
        parentId: 1,
        name: "Собаки"
      },
      {
        id: 2,
        parentId: 1,
        name: "Кошки"
      },
      {
        id: 3,
        parentId: 1,
        name: "Птицы"
      },
      {
        id: 4,
        parentId: 1,
        name: "Аквариум"
      },
      {
        id: 5,
        parentId: 1,
        name: "Другие животные",
        children: [
          {
            id: 1,
            parentId: 5,
            name: "Амфибии"
          },
          {
            id: 2,
            parentId: 5,
            name: "Мифические существа"
          },

        ]
      },

    ]
  }
])
