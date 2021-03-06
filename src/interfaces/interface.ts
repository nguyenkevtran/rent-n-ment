export interface Media {
  file_id: number;
  filename: string;
  filesize: number;
  title: string;
  description: string;
  user_id: number;
  media_type: string;
  mime_type: string;
  time_added: string;
  screenshot?: string;
  thumbnails?: Thumbnail;
}

export interface Thumbnail {
  w160: string;
  w320?: string;
  w640?: string;
}

export interface User {
  user_id?: number;
  username: string;
  password?: string;
  email?: string;
  full_name?: string;
  time_created?: Date;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: User;
}

export interface RegisterResponse {
  message: string;
  user_id: number;

}

export interface UserExists {
  username: string;
  available: boolean;

}

export interface Product extends Media {
  tag_id?: number;
  tag?: string;
  price?: number | string;
  status?: number;
}

export interface ProductRating {
  rating_id: number;
  rating: number;
  file_id: number;
  user_id: number;
}

export interface ProductComment extends User {
  comment_id: number;
  comment: string;
  time_added: string;
  file_id: number;
}

export interface UserLocation {
  latitude: number;
  longitude: number;
}
