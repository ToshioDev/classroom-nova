import { GraduationCap } from "lucide-react";

interface CourseHeaderProps {
  title: string;
  description: string;
}

export function CourseHeader({ title, description }: CourseHeaderProps) {
  return (
    <>
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-8 h-8 text-primary" />
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      </div>
      
      <p className="text-muted-foreground max-w-3xl mb-12">
        {description}
      </p>
    </>
  );
}