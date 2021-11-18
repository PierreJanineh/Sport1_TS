import {ListRenderItem} from 'react-native';
import {store} from './store';

export type AppStore = typeof store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

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
