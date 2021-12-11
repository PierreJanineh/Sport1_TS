export enum ItemSeparatorType {
  MoreMenuList,
  VODCollapsibleList,
  VODVideosList,
}

export interface VODCategoriesState {
  categories: VODCategory[];
  loading: boolean;
  chosenVideo?: VODVideo;
  error?: any;
}

export interface VODRobots {
  index: string;
  follow: string;
  maxSnippet: string;
  maxImagePreview: string;
  maxVideoPreview: string;
}

export interface VODOgImage {
  width: number;
  height: number;
  url: string;
  type: string;
}

export interface VODYoastHeadJson {
  title: string;
  robots: VODRobots;
  canonical: string;
  ogLocale: string;
  ogType: string;
  ogTitle: string;
  ogUrl: string;
  ogSiteName: string;
  ogImage: VODOgImage[];
  articleModifiedTime: string;
  twitterCard: string;
}

export interface VODFeaturedImage {
  title: string;
  url: string;
  credit: string;
}

export interface VODSubCategory {
  id: string;
  name: string;
}

export interface VODShare {
  domain: string;
  href: string;
}

export interface VODVideo {
  id: number;
  videoId: number;
  videoName: string;
  videoDuration: number;
  videoPoster: string;
  featuredImage: VODFeaturedImage;
  category: VODSubCategory;
  share: VODShare;
  date: string;
  title: string;
  yoastHead: string;
  yoastHeadJson: VODYoastHeadJson;
}

export type VODCategory = {
  id: number;
  name: string;
  subCategories: VODSubCategory[];
  videos: VODVideo[];
};

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

export type RootState = {
  main: CategoriesState;
  vod: VODCategoriesState;
};
