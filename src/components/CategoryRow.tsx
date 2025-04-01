import React from 'react';
import { VideoCard } from './VideoCard';
import { Video, Category } from '../types';

interface CategoryRowProps {
  category: Category;
  videos: Video[];
  onPlayVideo: (video: Video) => void;
}

export const CategoryRow: React.FC<CategoryRowProps> = ({ category, videos, onPlayVideo }) => {
  const categoryVideos = videos.filter(video => video.category === category.id);

  if (categoryVideos.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-white/90">{category.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryVideos.map(video => (
          <VideoCard key={video.id} video={video} onPlay={onPlayVideo} />
        ))}
      </div>
    </div>
  );
};