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
    <div className="w-64 h-[calc(100vh-80px)] border-r border-gray-200 px-2 py-4">
      <div className="mb-4 flex items-center">
        <Box className="w-8 h-8 text-primary" />
        <h2 className="text-lg font-bold ml-2">Categorías</h2>
      </div>
      <div className="space-y-2">
        {categories.map(category => (
          <div key={category.name}>
            <button
              className={`w-full p-4 focus:outline-none flex items-center justify-start rounded-lg text-white ${
                activeCategory === category.name ? 'bg-black/80' : 'bg-black'
              }`}
              onClick={() => handleCategoryClick(category.name)}
            >
              <Icon name={category.icon} color={"white"} size={24} />
              <span className="ml-2">{category.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
