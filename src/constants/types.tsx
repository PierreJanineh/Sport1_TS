export enum VODCategories {
  IsraeliSoccer = 'כדורגל ישראלי',
  InternationalSoccer = 'כדורגל עולמי',
  IsraeliBasketBall = 'כדורסל ישראלי',
  InternationalBasketBall = 'כדורסל עולמי',
  OtherFields = 'ענפים נוספים',
}

export interface CategoriesState {
  mainCategories: CategoryItem[];
  filteredCategoriesList: CategoryItem[];
  links: LinkItem[];
  searchTxt: string;
}

export type Category = {
  id: number;
  isParentCategory: boolean;
  children: Category[];
};

export enum ListType {
  Item,
  Logo,
  Separator,
  Link,
}

export enum LinkTypes {
  privacy_policy = 'privacy_policy',
  terms_of_use = 'terms_of_use',
}

export interface IBaseItem<T> {
  type: T;
}

export interface ITitleItem {
  title: string;
}

export interface ILinkItem {
  link: string;
}

export interface ICategoryItem {
  id: number;
  isParentCategory: boolean;
  children: Category[];
}

export type FocusableSvgProps = { focused: boolean };
export type CollapsibleMenuProps = { collapsed: boolean };

export type ListItem = IBaseItem<ListType> & ITitleItem;

export type LinkItem = IBaseItem<ListType> & ITitleItem & ILinkItem;

export type CategoryItem = IBaseItem<ListType> & ITitleItem & ICategoryItem;

export type ListItemType = ListItem | LinkItem | CategoryItem;

export type VODListItem = IBaseItem<VODCategories> & VODCategory;
