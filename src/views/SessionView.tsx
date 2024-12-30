
import DesktopLayout from '@/components/layouts/vision/DesktopLayout'
import { useState } from 'react'

export default function SessionView() {
  const [currentVideoUrl, setCurrentVideoUrl] = useState("https://drive.google.com/file/d/1Qv8ZOY0CaCOb-XAwvBFAKWTRYgUn3ilT/preview")
  const [currentVideoInfo, setCurrentVideoInfo] = useState({
    title: "Introducción a la Física Cuántica",
    description: "En este video, exploramos los fundamentos de la física cuántica y sus aplicaciones en el mundo moderno.",
    categories: ['Física', 'Ciencia'],
    type: "Clase"
  })

  return (
    <>
      <div className="hidden md:block">
        <DesktopLayout 
          currentVideoUrl={currentVideoUrl}
          currentVideoInfo={currentVideoInfo}
          setCurrentVideoUrl={setCurrentVideoUrl}
          setCurrentVideoInfo={setCurrentVideoInfo}
        />
      </div>
    </>
  )
}
