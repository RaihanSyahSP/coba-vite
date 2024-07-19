import React from "react";

interface AvatarProps {
  src: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({ src, size = 40 }) => {
    
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <rect width={size} height={size} rx="20" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0" transform="scale(0.00115473)" />
        </pattern>
        <image id="image0" width="866" height="866" xlinkHref={src} />
      </defs>
    </svg>
  );
};

export default Avatar;
