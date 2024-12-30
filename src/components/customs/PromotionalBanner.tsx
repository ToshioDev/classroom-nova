import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "¡50% de descuento en cursos de JavaScript!",
    description: "Aprovecha esta oferta por tiempo limitado"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Nuevo curso de React Native",
    description: "Aprende a crear aplicaciones móviles"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    title: "Bootcamp intensivo",
    description: "3 meses de inmersión total en programación"
  }
];

export default function PromotionalBanner() {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      className="w-full h-[400px] rounded-xl overflow-hidden"
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <div className="relative w-full h-full">
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-3xl font-bold text-white mb-2">{banner.title}</h3>
              <p className="text-xl text-white/90">{banner.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}