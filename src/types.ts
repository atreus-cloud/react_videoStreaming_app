export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface WatchHistory {
  videoId: string;
  timestamp: number;
  progress: number;
}