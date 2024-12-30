import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from 'lucide-react'; // Import the desired icon

interface Course {
  id: number;
  name: string;
  level: string;
  imageUrl: string;
}

interface CourseOnSellProps {
  courses: Course[];
}

const CourseOnSell: React.FC<CourseOnSellProps> = ({ courses }) => {
  return (
    <div> 
      {courses.length === 0 ? (
        <div className="flex flex-col h-screen flex items-center mt-32">
          <Box className="w-24 h-24 text-primary mb-4" />
          <span className="text-3xl font-bold text-center">Pronto agregaremos cursos en esta categoría.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map(course => (
            <div key={course.id} className="border rounded p-4 shadow-lg">
              <img src={course.imageUrl} alt={course.name} className="w-full h-32 object-cover" />
              <h3 className="text-lg font-semibold mt-2">{course.name}</h3>
              <p className="text-gray-600">Nivel: {course.level}</p>
              <Link to={`/vision/${course.id}`} className="text-blue-500 hover:underline">Ver Curso</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseOnSell;
