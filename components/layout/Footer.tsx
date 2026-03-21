import React from 'react';
import Link from 'next/link';
import { Twitter, Github, DiscIcon as Discord, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <>
      

      <footer className="bg-surface py-12 border-t border-surface/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
              ZEB Web
            </span>
            <p className="text-sm font-mono text-foreground/50">
              Powered by Stellar Soroban
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="p-2 text-foreground/60 hover:text-primary transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="p-2 text-foreground/60 hover:text-primary transition-colors">
              <Discord size={24} />
            </a>
            <a href="#" className="p-2 text-foreground/60 hover:text-primary transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-background/20 text-center md:text-left text-xs text-foreground/40 float-left w-full h-full flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} ZEB Web. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0 justify-center">
             <a href="#" className="hover:text-foreground">Terms</a>
             <a href="#" className="hover:text-foreground">Privacy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
