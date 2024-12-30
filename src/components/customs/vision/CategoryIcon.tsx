import { icons } from 'lucide-react';

// Define the type for icons
interface IconsType {
    [key: string]: React.ComponentType<{ color?: string; size?: number }>; 
}

// Cast icons to the defined type
const typedIcons = icons as IconsType;

// Define the props interface
interface CategoryIconProps {
    name: string;
    color: string;
    size: number;
}

const CategoryIcon: React.FC<CategoryIconProps> = ({ name, color, size }) => {
  console.log("Icon name:", name);
  console.log("Available icons:", Object.keys(typedIcons));

  const LucideIcon = typedIcons[name];

  if (!LucideIcon) {
    console.error(`Icon not found: ${name}`);
    return null; // or a fallback UI
  }

  return <LucideIcon color={color} size={size} />;
};

export default CategoryIcon;