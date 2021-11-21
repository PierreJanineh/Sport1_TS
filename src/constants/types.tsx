import { ListRenderItem } from 'react-native';

export interface CategoriesState {
  mainCategories: Category[];
  categoriesList: Category[];
  links: { [x: string]: string };
  searchTxt: string;
}

//ListItem component Props Type
export type Props = {
  items: any[];
  renderItem: ListRenderItem<ListItem>;
};

export interface ListItem {
  title: string;
}

export class Category implements ListItem {
  title: string;
  id: number;
  isParentCategory: boolean;
  children: Category[];

  constructor(
    title: string,
    id: number,
    isParentCategory: boolean,
    children: Category[],
  ) {
    this.title = title;
    this.id = id;
    this.isParentCategory = isParentCategory;
    this.children = children;
  }
}

export class Link implements ListItem {
  title: string;
  link: string;

  constructor(title: string, link: string) {
    this.title = title;
    this.link = link;
  }
}

export class OtherListItem implements ListItem {
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}
