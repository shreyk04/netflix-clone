import React, { useState } from 'react';
import { IMG_CDN_URL } from '../utils/constants';
import ImageHoverCard from './ImageHoverCard';

function MovieCard({ posterPath, genres }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className="w-[200px] h-[12vw] relative rounded-lg  cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {
        !isHovered&&<img
        src={IMG_CDN_URL + posterPath}
        alt="Movie Card"
        className="cursor-pointer w-full h-[12vw] object-cover transition duration z-10  group-hover:opacity-90 delay-300
        sm:group-hover:opacity-0"

      />

      }
      
      <div className='opacity-0 absolute w-full top-0 transition duration-200 invisible sm:visible delay-300 scale-0 z-10 group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100 '>

      {isHovered && <ImageHoverCard genres={genres} posterPath={posterPath} />}
      </div>

    </div>
  );
}

export default MovieCard;
 