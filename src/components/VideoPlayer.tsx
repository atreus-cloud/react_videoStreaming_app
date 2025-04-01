import React from 'react';
import ReactPlayer from 'react-player';
import { X } from 'lucide-react';

interface VideoPlayerProps {
  url: string;
  title: string;
  onClose: () => void;
  onProgress?: (progress: number) => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title, onClose, onProgress }) => {
  const handleProgress = (state: { played: number }) => {
    if (onProgress) {
      onProgress(Math.round(state.played * 100));
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-5xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white/90">{title}</h2>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white/90 transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <div className="aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          <ReactPlayer
            url={url}
            width="100%"
            height="100%"
            controls
            playing
            onProgress={handleProgress}
          />
        </div>
      </div>
    </div>
  );
};