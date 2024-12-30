import React from 'react';

interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration: string;
  session: string;
  instructor: string;
  onClick?: () => void
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail, duration, session, instructor }) => {
  return (
    <div className="relative flex items-center justify-between p-4 bg-white bg-opacity-30 backdrop-blur-md rounded-lg shadow-lg transition duration-300 hover:shadow-xl mb-2" style={{ backgroundImage: `url(${thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900 opacity-50 rounded-lg"></div>
      <div className="relative flex flex-col justify-between w-2/3 pr-4 z-10">
        <h3 className="text-lg font-semibold text-white truncate">{title}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded absolute left-72">{session}</span> {/* Increased left margin for session badge */}
          <span className="text-gray-200 text-sm">{instructor}</span>
          <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded absolute left-56">{duration}</span> {/* Duration badge */}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
