export interface VODCategoriesState {
  categories: CategoryItem[];
  loading: boolean;
  chosenVideo?: VODVideo;
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

export interface VODVideoCategory {
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
  category: VODVideoCategory;
  share: VODShare;
  date: string;
  title: string;
  yoastHead: string;
  yoastHeadJson: VODYoastHeadJson;
}

export type VODCategory = {
  id: number;
  name: string;
  subCategories: VODVideoCategory[];
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

export interface IBaseItem {
  type: ListType;
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

export type ListItem = IBaseItem & ITitleItem;

export type LinkItem = IBaseItem & ITitleItem & ILinkItem;

export type CategoryItem = IBaseItem & ITitleItem & ICategoryItem;

export type ListItemType = ListItem | LinkItem | CategoryItem;

export type RootState = {
  main: CategoriesState;
  vod: VODCategoriesState;
};
