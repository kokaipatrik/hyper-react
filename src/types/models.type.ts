export interface Nav {
  name: string;
  url: string;
}

export interface FooterLinkContent {
  url: string;
  title: string;
}

export interface FooterContent {
  title: string;
  content: Array<FooterLinkContent>;
}

export interface SocialLinkItem {
  url: string;
  name: string;
  img: string;
}

export interface BlogPostRecommender {
  img: string;
  imgAlt: string;
  date: string;
  title: string;
  description: string;
}
