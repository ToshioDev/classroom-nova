import React from 'react'


interface VideoPlayerProps {

  videoUrl: string

}



const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {

  const getGoogleDriveEmbedUrl = (url: string) => {

    const fileId = url.match(/[-\w]{25,}(?!.*[-\w]{25,})/);

    return fileId 

      ? `https://drive.google.com/file/d/${fileId[0]}/preview` 

      : url;

  };



  const embedUrl = getGoogleDriveEmbedUrl(videoUrl);



  return (

    <iframe

      src={embedUrl}

      allow="autoplay; encrypted-media; picture-in-picture"

      allowFullScreen

      className="w-full h-full"

    ></iframe>

  )

}



export default VideoPlayer



