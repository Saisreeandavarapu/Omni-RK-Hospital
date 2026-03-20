import React, { ReactNode } from 'react';
import { ZoomIn } from 'lucide-react';
import { useLightbox } from '../context/LightboxContext';

interface PremiumImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  containerClassName?: string;
  withGlow?: boolean;
  overlayContent?: ReactNode;
  imgWrapperClassName?: string;
}

export const PremiumImage = ({ 
  src, 
  alt, 
  className = '', 
  containerClassName = '', 
  imgWrapperClassName = 'rounded-[32px] sm:rounded-[40px]',
  withGlow = false, 
  overlayContent, 
  ...props 
}: PremiumImageProps) => {
  const { openLightbox } = useLightbox();

  if (!src) return null;

  return (
    <div className={`relative group ${containerClassName}`}>
      {withGlow && (
         <div className="absolute -inset-4 rounded-[40px] opacity-40 blur-2xl transition-opacity duration-700 pointer-events-none"
              style={{ background: 'linear-gradient(135deg, #0090e8 0%, #f5bc00 100%)' }} />
      )}
      
      <div
        className={`relative w-full h-full z-10 overflow-hidden cursor-pointer shadow-navy bg-navy-950/5 ${imgWrapperClassName}`}
        onClick={() => openLightbox(src, alt)}
        title="Click to view full photo"
      >
        <img
          src={src}
          alt={alt || 'Image'}
          className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ${className}`}
          {...props}
        />
        
        {/* The overlay content usually goes above the image but below the zoom icon */}
        {overlayContent && (
          <div className="absolute inset-0 pointer-events-none">
            {overlayContent}
          </div>
        )}

        {/* Hover zoom icon overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
             style={{ background: 'rgba(8,12,56,0.25)' }}>
          <div className="p-3 rounded-full shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300" 
               style={{ background: 'rgba(255,255,255,0.95)' }}>
            <ZoomIn size={24} style={{ color: '#0090e8' }} />
          </div>
        </div>
      </div>
    </div>
  );
};
