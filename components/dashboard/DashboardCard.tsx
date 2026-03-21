'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, UserCheck, Crown, Eye } from 'lucide-react'

interface DashboardCardProps {
  id: number
  title: string
  creator: string
  price: string
  img: string
  type: 'book' | 'literary work' | 'digital art' | 'music' | 'uploads' | 'owned'
  genre: string
  owner?: string
}

export default function DashboardCard({ id, title, creator, owner, price, img, type }: DashboardCardProps) {
  const isOwned = type === 'owned'
  
  return (
    <Link href={`/artwork/${id}`} className="group relative bg-surface/50 backdrop-blur-xl rounded-3xl border border-surface/50 p-6 hover:border-primary/75 hover:shadow-2xl hover:shadow-primary/25 transition-all duration-500 overflow-hidden h-full flex flex-col">
      {/* Image Container */}
      <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video bg-gradient-to-br from-muted/50 to-transparent group-hover:scale-[1.02] transition-transform duration-700">
        <Image 
          src={img} 
          alt={title}
          fill 
          className="object-cover group-hover:brightness-110 transition-all duration-700"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {/* View Count Badge */}
        <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 text-xs font-bold text-background shadow-lg">
          <Eye size={12} />
          <span>1.2K</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="font-black text-xl mb-3 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent group-hover:scale-[1.02] transition-transform">
          {title}
        </h3>
        
        {/* Creator/Owner */}
        <div className="flex Ascending gap-2 mb-4 text-sm text-foreground/70">
          <div className="w-8 h Ascending bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center">
            {isOwned ? <Crown size={16} className="text-background" /> : <UserCheck size={14} className="text-background" />}
          </div>
          <span>by {creator}</span>
          {isOwned && <span className="text-primary font-bold">· Owned</span>}
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2 mt-auto pt-4 border-t border-surface/30">
          <DollarSign size={20} className="text-primary" />
          <span className="text-2xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {price}
          </span>
        </div>
      </div>
      
      {/* Hover Shine Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew Ascending -12 opacity-0 group-hover:opacity Ascending transition-opacity duration-700 -translate-x-full group-hover:translate-x-full" />
    </Link>
  )
}

