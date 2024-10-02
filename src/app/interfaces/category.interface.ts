export interface CategoryInterface
{
  id: number;
  name: string;
  children: ChildCategoryInterface[];
}


interface ChildCategoryInterface
{
  id: number;
  parentId: number;
  name: string;
}
