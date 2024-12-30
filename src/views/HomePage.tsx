import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/modules/Navbar';
import CourseSection from '@/components/modules/CourseSection';
import AdvertisementSection from '@/components/modules/AdvertisementSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white w-full">
      <Navbar />
      <main className="w-full px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <CourseSection />
          <AdvertisementSection />
        </div>
      </main>
    </div>
  );
}