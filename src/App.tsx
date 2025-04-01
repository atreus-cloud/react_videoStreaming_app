import React, { useState, useEffect } from 'react';
import { Play, Search, Menu, X, History } from 'lucide-react';
import { VideoPlayer } from './components/VideoPlayer';
import { CategoryRow } from './components/CategoryRow';
import { ContinueWatching } from './components/ContinueWatching';
import { categories, videos } from './data';
import { Video, Category, WatchHistory } from './types';

function App() {
  const [currentVideo, setCurrentVideo] = useState<Video | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContinueWatching, setShowContinueWatching] = useState(false);

  const resetToHome = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setIsMenuOpen(false);
    setShowContinueWatching(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVideoPlay = (video: Video) => {
    setCurrentVideo(video);
    // Update watch history
    const history: WatchHistory[] = JSON.parse(localStorage.getItem('watchHistory') || '[]');
    const now = Date.now();
    const updatedHistory = [
      { videoId: video.id, timestamp: now, progress: 0 },
      ...history.filter(h => h.videoId !== video.id)
    ].slice(0, 20); // Keep only last 20 videos
    localStorage.setItem('watchHistory', JSON.stringify(updatedHistory));
  };

  const handleVideoProgress = (progress: number) => {
    if (!currentVideo) return;
    const history: WatchHistory[] = JSON.parse(localStorage.getItem('watchHistory') || '[]');
    const updatedHistory = history.map(h => 
      h.videoId === currentVideo.id ? { ...h, progress } : h
    );
    localStorage.setItem('watchHistory', JSON.stringify(updatedHistory));
  };

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? video.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedCategory(categoryId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <header className="bg-gray-900/50 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={resetToHome}
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
            >
              <Play className="h-8 w-8 text-indigo-500" />
              <h1 className="ml-2 text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
                StreamFlix
              </h1>
            </button>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowContinueWatching(!showContinueWatching)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  showContinueWatching 
                    ? 'bg-indigo-500/20 text-indigo-400' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <History size={24} />
              </button>
              
              <div className="relative max-w-md w-full hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search videos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-800 text-gray-100 rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-gray-700"
                />
              </div>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 py-4">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ul className="space-y-2">
                {categories.map(category => (
                  <li key={category.id}>
                    <button
                      onClick={() => scrollToCategory(category.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200 ${
                        selectedCategory === category.id
                          ? 'bg-indigo-500/20 text-indigo-400'
                          : 'text-gray-300 hover:bg-gray-800'
                      }`}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showContinueWatching ? (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-white/90">Continue Watching</h2>
            <ContinueWatching videos={videos} onPlayVideo={handleVideoPlay} />
          </div>
        ) : (
          categories.map(category => (
            <div key={category.id} id={`category-${category.id}`}>
              <CategoryRow
                category={category}
                videos={filteredVideos}
                onPlayVideo={handleVideoPlay}
              />
            </div>
          ))
        )}
      </main>

      {/* Video Player Modal */}
      {currentVideo && (
        <VideoPlayer
          url={currentVideo.url}
          title={currentVideo.title}
          onClose={() => setCurrentVideo(null)}
          onProgress={handleVideoProgress}
        />
      )}
    </div>
  );
}

export default App;