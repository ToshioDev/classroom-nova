import React from 'react';
import { categories } from './categories';
import Icon from './CategoryIcon';
import { Box } from 'lucide-react';

interface Course {
  id: number;
  name: string;
  levels: {
    basic: boolean;
    intermediate: boolean;
    advanced: boolean;
  };
  urls: {
    basic: string;
    intermediate: string;
    advanced: string;
  };
}

interface CourseButtonProps {
  course: Course;
  isActive: boolean;
  onClick: () => void;
}

interface LevelButtonProps {
  level: keyof Course['urls'];
  isActive: boolean;
  onClick: () => void;
  courseId: number;
}

interface LeftSidebarProps {
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ activeCategory, setActiveCategory }) => {
  const handleCategoryClick = (categoryName: string) => {
    setActiveCategory(activeCategory === categoryName ? null : categoryName);
  };

  return (
    <div className="w-64 bg-gray-100 p-4 shadow-md">
      <div className="mb-4 flex items-center">
        <Box className="w-8 h-8 text-primary" />
        <h2 className="text-lg font-bold ml-2">Categorías</h2>
      </div>
      <div className="border border-gray-300 rounded-md">
        {categories.map(category => (
          <div key={category.name} className="border-b border-gray-300 mb-1">
            <button
              className={`w-full p-4 focus:outline-none flex items-center justify-start ${
                activeCategory === category.name ? 'bg-gray-300 text-black' : 'bg-black text-white'
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <Icon name={category.icon} color={activeCategory === category.name ? 'black' : 'white'} size={24} />
              <span className="ml-2">{category.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
