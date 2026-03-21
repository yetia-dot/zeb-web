'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Filter, Upload, BookOpen, Music, Palette, UploadCloud } from 'lucide-react'
import DashboardCard from './DashboardCard'

interface Artwork {
  id: number
  title: string
  creator: string
  price: string
  img: string
  type: 'book' | 'literary work' | 'digital art' | 'music'
  genre: 'hip hop' | 'classic' | 'rock' | 'pop' | 'jazz' | 'other'
  owner?: string
}

type TabType = 'uploads' | 'owned'

const rawUploadedArtworks: Artwork[] = [
  { id: 1, title: 'Neon Syntax #001', creator: 'GCF2A...3X9Y', price: '450 XLM', img: '/file.svg', type: 'digital art', genre: 'hip hop' },
  { id: 2, title: 'Cyber Bloom Genesis', creator: 'GCF2A...3X9Y', price: '320 XLM', img: '/file.svg', type: 'digital art', genre: 'pop' },
  { id: 4, title: 'Stellar Orbit Drift', creator: 'GCF2A...3X9Y', price: '240 XLM', img: '/file.svg', type: 'music', genre: 'classic' },
  { id: 5, title: 'Magenta Pulse Matrix', creator: 'GCF2A...3X9Y', price: '590 XLM', img: '/file.svg', type: 'digital art', genre: 'jazz' },
  { id: 6, title: 'Ethereum Echo', creator: 'GCF2A...3X9Y', price: '180 XLM', img: '/file.svg', type: 'literary work', genre: 'other' },
]

const rawOwnedArtworks: Artwork[] = [
  { id: 1, title: 'Cosmic Rift by NovaCollect', creator: 'NovaC...K7P2', owner: 'You', price: '450 XLM', img: '/file.svg', type: 'digital art', genre: 'rock' },
  { id: 2, title: 'Digital Lotus #44', creator: 'ArtByZ...4M9Q', owner: 'You', price: '890 XLM', img: '/file.svg', type: 'book', genre: 'classic' },
  { id: 3, title: 'Aurora Code Rain', creator: 'CodeR...H8J5', owner: 'You', price: '320 XLM', img: '/file.svg', type: 'digital art', genre: 'hip hop' },
  { id: 4, title: 'Pixel Nebula Drift', creator: 'PixelN...2L6R', owner: 'You', price: '560 XLM', img: '/file.svg', type: 'music', genre: 'jazz' },
  { id: 5, title: 'Synthwave Horizon', creator: 'Synth...9F3V', owner: 'You', price: '420 XLM', img: '/file.svg', type: 'digital art', genre: 'pop' },
  { id: 6, title: 'Glitch Archive #12', creator: 'Glitch...M5T1', owner: 'You', price: '290 XLM', img: '/file.svg', type: 'literary work', genre: 'other' },
]

export default function TabbedArtworks() {
  const [activeTab, setActiveTab] = useState<TabType>('uploads')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<'book' | 'literary work' | 'digital art' | 'music' | 'all'>('all')
  const [selectedGenre, setSelectedGenre] = useState<'hip hop' | 'classic' | 'rock' | 'pop' | 'jazz' | 'other' | 'all'>('all')

  const artworks = activeTab === 'uploads' ? rawUploadedArtworks : rawOwnedArtworks

  const filteredArtworks = useMemo(() => {
    return artworks.filter((art) => {
      const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            art.creator.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesType = selectedType === 'all' || art.type === selectedType
      const matchesGenre = selectedGenre === 'all' || art.genre === selectedGenre
      return matchesSearch && matchesType && matchesGenre
    })
  }, [artworks, searchQuery, selectedType, selectedGenre])

  return (
    <section className="py-32 relative bg-gradient-to-b from-background to-surface/50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.3),transparent),radial-gradient(circle_at_80%_20%,rgba(255,119,198,0.3),transparent)] opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Tab Header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-20">
          <div className="flex bg-surface/80 backdrop-blur-xl rounded-2xl p-1 shadow-2xl border border-surface/50 max-w-md w-full">
            <button
              onClick={() => setActiveTab('uploads')}
              className={`flex-1 py-6 px-8 rounded-xl font-black text-xl transition-all duration-500 ${
                activeTab === 'uploads'
                  ? 'bg-gradient-to-r from-primary to-secondary text-background shadow-[0_10px_30px_rgba(51,255,235,0.4)] scale-[1.02]'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              My Uploads
            </button>
            <button
              onClick={() => setActiveTab('owned')}
              className={`flex-1 py-6 px-8 rounded-xl font-black text-xl transition-all duration-500 ${
                activeTab === 'owned'
                  ? 'bg-gradient-to-r from-primary to-secondary text-background shadow-[0_10px_30px_rgba(51,255,235,0.4)] scale-[1.02]'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              My Collection
            </button>
          </div>
          
          {/* Active indicator (swipe underline) */}
          <div 
            className={`h-1 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-700 w-24 ${
              activeTab === 'uploads' ? 'translate-x-0' : 'translate-x-full'
            }`}
          />
        </div>

        {/* Swipe Content Container */}
        <div className="relative overflow-hidden rounded-3xl bg-surface/60 backdrop-blur-2xl border border-surface shadow-2xl max-h-[800px]">
          <div 
            className={`flex transition-transform duration-700 ease-in-out ${
              activeTab === 'uploads' ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            {/* Uploaded Grid */}
            <div className="min-w-full p-12">
              {/* Filters for Uploads */}
              <div className="flex flex-col lg:flex-row gap-4 mb-8 bg-surface/80 backdrop-blur-xl rounded-2xl p-6 border border-surface/50">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by title or creator..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-surface/50 border border-surface/30 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="flex gap-3 flex-1 lg:flex-none">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value as any)}
                    className="flex-1 px-4 py-3 bg-surface/50 border border-surface/30 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="all">All Types</option>
                    <option value="book">Book</option>
                    <option value="literary work">Literary Work</option>
                    <option value="digital art">Digital Art</option>
                    <option value="music">Music</option>
                  </select>
                  <select
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value as any)}
                    className="flex-1 px-4 py-3 bg-surface/50 border border-surface/30 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="all">All Genres</option>
                    <option value="hip hop">Hip Hop</option>
                    <option value="classic">Classic</option>
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="jazz">Jazz</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {activeTab === 'uploads' && (
                  <Link href="/dashboard/upload" className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-background font-bold rounded-xl hover:shadow-lg hover:shadow-primary/25 transition-all whitespace-nowrap">
                    <UploadCloud size={20} />
                    Upload New
                  </Link>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArtworks.map((art) => (
                  <DashboardCard key={art.id} {...art} type={activeTab} />
                ))}
                {filteredArtworks.length === 0 && (
                  <div className="col-span-full text-center py-20 text-foreground/50">
                    No artworks match your filters
                  </div>
                )}
              </div>
            </div>
            
            {/* Owned Grid */}
            <div className="min-w-full p-12">
              {/* Filters for Owned - same state since shared */}
              <div className="flex flex-col lg:flex-row gap-4 mb-8 bg-surface/80 backdrop-blur-xl rounded-2xl p-6 border border-surface/50">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/50 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search by title or creator..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-surface/50 border border-surface/30 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="flex gap-3 flex-1 lg:flex-none">
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value as any)}
                    className="flex-1 px-4 py-3 bg-surface/50 border border-surface/30 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="all">All Types</option>
                    <option value="book">Book</option>
                    <option value="literary work">Literary Work</option>
                    <option value="digital art">Digital Art</option>
                    <option value="music">Music</option>
                  </select>
                  <select
                    value={selectedGenre}
                    onChange={(e) => setSelectedGenre(e.target.value as any)}
                    className="flex-1 px-4 py-3 bg-surface/50 border border-surface/30 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  >
                    <option value="all">All Genres</option>
                    <option value="hip hop">Hip Hop</option>
                    <option value="classic">Classic</option>
                    <option value="rock">Rock</option>
                    <option value="pop">Pop</option>
                    <option value="jazz">Jazz</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArtworks.map((art) => (
                  <DashboardCard key={art.id} {...art} type={activeTab} />
                ))}
                {filteredArtworks.length === 0 && (
                  <div className="col-span-full text-center py-20 text-foreground/50">
                    No artworks match your filters
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

