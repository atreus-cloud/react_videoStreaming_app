import React from 'react';
import { Play } from 'lucide-react';
import { Video } from '../types';

interface VideoCardProps {
  video: Video;
  onPlay: (video: Video) => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onPlay }) => {
  return (
    <div 
      className="relative group cursor-pointer rounded-xl overflow-hidden bg-gray-800 shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      onClick={() => onPlay(video)}
    >
      <div className="aspect-video relative">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
            <Play className="text-white" size={32} />
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-white/90 line-clamp-2 group-hover:text-indigo-400 transition-colors duration-300">
          {video.title}
        </h3>
      </div>
    </div>
  );
};