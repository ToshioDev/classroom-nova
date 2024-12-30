import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, BookOpen, Eye, Link } from 'lucide-react';

interface CourseCardProps {
  title: string;
  level: string;
  classroom: string;
  image: string;
  vision: string;
  homework: string;
}

export default function CourseCard({ title, level, classroom, image, vision, homework }: CourseCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-2">
          <div className="flex items-center text-gray-600">
            <Award className="w-4 h-4 mr-2" />
            <span className="text-sm">Nivel: {level}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span className="text-sm">Salón: {classroom}</span>
          </div>
        </div>
        <div className="flex justify-end mt-auto">
          <a href="/homework" className="flex items-center justify-center border border-black text-black w-10 h-10 rounded hover:bg-black hover:text-white transition duration-300">
            <BookOpen className="w-4 h-4" />
          </a>
          <a href={vision} className="flex items-center justify-center border border-black text-black w-10 h-10 rounded hover:bg-black hover:text-white transition duration-300 ml-2">
            <Eye className="w-4 h-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
}