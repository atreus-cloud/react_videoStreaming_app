import React from 'react';
import { VideoCard } from './VideoCard';
import { Video, WatchHistory } from '../types';
import { History } from 'lucide-react';

interface ContinueWatchingProps {
  videos: Video[];
  onPlayVideo: (video: Video) => void;
}

export const ContinueWatching: React.FC<ContinueWatchingProps> = ({ videos, onPlayVideo }) => {
  const [watchHistory, setWatchHistory] = React.useState<WatchHistory[]>(() => {
    const saved = localStorage.getItem('watchHistory');
    return saved ? JSON.parse(saved) : [];
  });

  const watchedVideos = videos.filter(video => 
    watchHistory.some(history => history.videoId === video.id)
  ).sort((a, b) => {
    const aTimestamp = watchHistory.find(h => h.videoId === a.id)?.timestamp || 0;
    const bTimestamp = watchHistory.find(h => h.videoId === b.id)?.timestamp || 0;
    return bTimestamp - aTimestamp;
  });

  if (watchedVideos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-400">
        <History size={48} className="mb-4" />
        <h3 className="text-xl font-medium mb-2">No watch history yet</h3>
        <p>Videos you watch will appear here</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {watchedVideos.map(video => (
        <div key={video.id} className="relative">
          <VideoCard video={video} onPlay={onPlayVideo} />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-500"
              style={{ 
                width: `${watchHistory.find(h => h.videoId === video.id)?.progress || 0}%` 
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};