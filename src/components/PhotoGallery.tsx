import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Hash, Calendar, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PhotoData } from '@/types/blockchain';

interface PhotoGalleryProps {
  photos: PhotoData[];
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  if (!photos.length) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-cyber text-primary mb-4 flex items-center space-x-2">
        <div className="w-2 h-2 bg-accent rounded-full" />
        <span>Photo Gallery</span>
      </h3>

      <div className="relative">
        {/* Main Photo Container with 3D Block Effect */}
        <div className="relative overflow-hidden rounded-lg border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5 p-1">
          <div className="relative bg-card/50 backdrop-blur-sm rounded border border-border overflow-hidden group">
            <div className="aspect-[4/3] relative overflow-hidden">
              <img
                src={photos[currentIndex].url}
                alt={photos[currentIndex].title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              
              {/* Title overlay */}
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="text-sm font-cyber text-primary neon-glow">
                  {photos[currentIndex].title}
                </h4>
              </div>
            </div>

            {/* Navigation Arrows */}
            {photos.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>

          {/* 3D Block Corner Accents */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-primary/50" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-primary/50" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-primary/50" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-primary/50" />
        </div>

        {/* Photo Metadata */}
        <div className="mt-3 space-y-2 text-xs">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Hash className="w-3 h-3 text-primary" />
            <span className="text-muted-foreground">Photo Hash:</span>
            <span className="font-mono text-primary">
              {photos[currentIndex].metadata.hash}
            </span>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            {/* <Calendar className="w-3 h-3 text-primary" /> */}
            {/* <span className="text-muted-foreground">Captured on:</span> */}
            {/* <span className="font-mono">
              {photos[currentIndex].metadata.capturedOn}
            </span> */}
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <FileText className="w-3 h-3 text-primary" />
            <span className="text-muted-foreground">Block Ref:</span>
            <span className="font-mono text-accent">
              {photos[currentIndex].metadata.blockRef}
            </span>
          </div>
        </div>

        {/* Photo Navigation Dots */}
        {photos.length > 1 && (
          <div className="flex justify-center space-x-2 mt-4">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary scale-125'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Chain Link Visual Effect */}
        {photos.length > 1 && (
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 opacity-20">
            <div className="flex flex-col space-y-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-3 h-1 bg-primary/40 rounded-full" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};