export interface VODCategoriesState {
  categories: VODListItem[];
  loading: boolean;
  chosenVideo?: VODVideo;
}

export interface VODRobots {
  index: string;
  follow: string;
  max_snippet: string;
  max_image_preview: string;
  max_video_preview: string;
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
  og_locale: string;
  og_type: string;
  og_title: string;
  og_url: string;
  og_siteName: string;
  og_image: VODOgImage[];
  article_modified_time: string;
  twitter_card: string;
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
  video_id: number;
  video_name: string;
  video_duration: number;
  video_poster: string;
  featured_image: VODFeaturedImage;
  category: VODVideoCategory;
  share: VODShare;
  date: string;
  title: string;
  yoast_head: string;
  yoast_head_json: VODYoastHeadJson;
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
