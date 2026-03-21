'use client'

import React from 'react'
import { ShieldCheck, TrendingUp, BarChart3 } from 'lucide-react'

export default function WelcomeNote() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
        Welcome Mr. X
      </h1>
      
      {/* Minimized stats row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center p-6 bg-surface/50 rounded-2xl border border-surface/30">
          <BarChart3 size={32} className="text-primary mb-3" />
          <div className="text-2xl font-bold text-foreground mb-1">42</div>
          <p className="text-sm text-foreground/70">Total Uploads</p>
        </div>
        
        <div className="flex flex-col items-center p-6 bg-surface/50 rounded-2xl border border-surface/30">
          <ShieldCheck size={32} className="text-secondary mb-3" />
          <div className="text-2xl font-bold text-foreground mb-1">17</div>
          <p className="text-sm text-foreground/70">Owned Assets</p>
        </div>
        
        <div className="flex flex-col items-center p-6 bg-surface/50 rounded-2xl border border-surface/30">
          <TrendingUp size={32} className="text-green-500 mb-3" />
          <div className="text-2xl font-bold text-green-500 mb-1">+24%</div>
          <p className="text-sm text-foreground/70">Portfolio Growth</p>
        </div>
      </div>
    </section>
  )
}

