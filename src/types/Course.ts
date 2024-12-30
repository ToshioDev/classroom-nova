export interface Session {
    id: number;
    title: string;
    thumbnail: string;
    duration: string;
    sessionNumber: number;
  }
  
  export interface CourseData {
    title: string;
    description: string;
    sessions: Session[];
  }