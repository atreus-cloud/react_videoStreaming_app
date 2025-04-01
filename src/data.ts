import { Video, Category } from './types';

export const categories: Category[] = [
  { id: '1', name: 'Trending Now' },
  { id: '2', name: 'Popular' },
  { id: '3', name: 'New Releases' },
  { id: '4', name: 'Nature & Wildlife' },
  { id: '5', name: 'Travel & Adventure' },
];

export const videos: Video[] = [
  // Trending Now
  {
    id: '1',
    title: 'Beautiful Ocean Waves at Sunset',
    thumbnail: 'https://i.ytimg.com/vi/fsjwljJ4Ges/maxresdefault.jpg',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: '1',
  },
  {
    id: '2',
    title: 'Epic Mountain Adventure in the Alps',
    thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: '1',
  },
  {
    id: '3',
    title: 'Tokyo City Life at Night',
    thumbnail: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: '1',
  },
  
  // Popular
  {
    id: '4',
    title: 'Urban Photography Masterclass',
    thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: '2',
  },
  {
    id: '5',
    title: 'Desert Expedition: Sahara Adventure',
    thumbnail: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: '2',
  },
  {
    id: '6',
    title: 'Ancient Ruins Discovery',
    thumbnail: 'https://images.unsplash.com/photo-1548013146-72479768bada',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: '2',
  },

  // New Releases
  {
    id: '7',
    title: 'Meditation in the Forest',
    thumbnail: 'https://images.unsplash.com/photo-1511497584788-876760111969',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: '3',
  },
  {
    id: '8',
    title: 'Aurora Borealis Timelapse',
    thumbnail: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: '3',
  },
  {
    id: '9',
    title: 'Underwater Coral Reef Explorer',
    thumbnail: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: '3',
  },

  // Nature & Wildlife
  {
    id: '10',
    title: 'African Safari: Lions in the Wild',
    thumbnail: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: '4',
  },
  {
    id: '11',
    title: 'Rainforest Expedition',
    thumbnail: 'https://media.istockphoto.com/id/652735376/photo/backpacker-on-suspension-bridge-in-rainforest.jpg?s=612x612&w=0&k=20&c=ZA28luNWHboNBlNnexpaN7v-bc_ThaPeupMkzgpPITQ=',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: '4',
  },
  {
    id: '12',
    title: 'Polar Bears of the Arctic',
    thumbnail: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: '4',
  },

  // Travel & Adventure
  {
    id: '13',
    title: 'Backpacking Through Europe',
    thumbnail: 'https://images.unsplash.com/photo-1492693429561-1c283eb1b2e8',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: '5',
  },
  {
    id: '14',
    title: 'Hidden Beaches of Thailand',
    thumbnail: 'https://images.unsplash.com/photo-1468413253725-0d5181091126',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: '5',
  },
  {
    id: '15',
    title: 'Mountain Climbing in Nepal',
    thumbnail: 'https://images.unsplash.com/photo-1486911278844-a81c5267e227',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    category: '5',
  },
];