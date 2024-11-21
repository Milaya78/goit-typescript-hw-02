import axios from "axios";

const KEY = "7QaC31QWQatTvaiGVBFYsWoswGiVg-edIcET13XO0oA";
axios.defaults.baseURL = "https://api.unsplash.com/";

async function fetchImages(query: string, page: number) {
  const config = {
    headers: {
      "Accept-Version": "v1",
      Authorization: `Client-ID ${KEY}`,
    },
    params: {
      orientation: "landscape",
      content_filter: "low",
      per_page: 15,
      query,
      page,
    },
  };
  // config.params.query = query;
  // config.params.page = page;

  const response = await axios.get<ApiResponse>("search/photos", config);

  return response.data;
}
export default fetchImages;

export interface ApiResponse {
  total: number;
  total_pages: number;
  results: Image[];
}

export interface Image {
  id: string;
  slug: string;
  alternative_slugs: AlternativeSlugs;
  created_at: string;
  updated_at: string;
  promoted_at?: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: string;
  alt_description: string;
  breadcrumbs: any[];
  urls: Urls;
  links: Links;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: any;
  topic_submissions: TopicSubmissions;
  asset_type: string;
  user: User;
}

export interface AlternativeSlugs {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  ko: string;
  de: string;
  pt: string;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface TopicSubmissions {
  nature?: Nature;
  wallpapers?: Wallpapers;
  "architecture-interior"?: ArchitectureInterior;
}

export interface Nature {
  status: string;
  approved_on: string;
}

export interface Wallpapers {
  status: string;
  approved_on?: string;
}

export interface ArchitectureInterior {
  status: string;
}

export interface User {
  id: string;
  updated_at: string;
  username: string;
  name: string;
  first_name: string;
  last_name?: string;
  twitter_username?: string;
  portfolio_url?: string;
  bio?: string;
  location?: string;
  links: Links2;
  profile_image: ProfileImage;
  instagram_username?: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

export interface Links2 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username?: string;
  portfolio_url?: string;
  twitter_username?: string;
  paypal_email: any;
}
