import React from 'react';
import CourseCard from '../customs/CourseCard';

const courses = [
  {
    title: "Desarrollo Web Full Stack",
    level: "Intermedio",
    classroom: "Sala 201",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    vision: "/vision/fullstack",
    homework: "/homework-space/fullstack"
  },
  {
    title: "Python para Data Science",
    level: "Avanzado",
    classroom: "Sala 305",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    vision: "/vision/data-science",
    homework: "/homework-space/data-science"
  },
  {
    title: "Desarrollo de Apps Móviles",
    level: "Principiante",
    classroom: "Sala 103",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    vision: "/vision/app-development",
    homework: "/homework-space/app-development"
  }
];

export default function CourseSection() {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-4">Tus Cursos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index: number) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </section>
  );
}