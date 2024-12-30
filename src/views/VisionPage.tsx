import PromotionalBanner from "@/components/customs/PromotionalBanner";
import CourseOnSell from '../components/customs/vision/CourseOnSell';
import LeftSidebar from "@/components/customs/vision/LeftSidebar";
import Navbar from "@/components/modules/Navbar";
import { useState } from 'react';
import { categories } from '../components/customs/vision/categories';

export function VisionPage() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    // Get courses based on the active category
    const activeCourses = activeCategory ? categories.find(cat => cat.name === activeCategory)?.courses || categories.flatMap(cat => cat.courses) : categories.flatMap(cat => cat.courses);

    return (
        <div className="min-h-screen bg-white w-full">
            <Navbar/>        
            <div className="flex">
              <LeftSidebar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
              <div className="flex-1 p-4">
                <CourseOnSell courses={activeCourses} />
              </div>
            </div>
        </div>
    );
}