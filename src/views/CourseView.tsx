import { Container } from "@/components/ui/container";
import { SessionVideoCard } from "@/components/customs/vision/SessionVideoCard";
import { CourseHeader } from "@/components/customs/vision/CourseHeader";
import { useWatchedSessions } from "@/hooks/useWatchedSessions";
import type { CourseData } from "@/types/Course";
import Navbar from "@/components/modules/Navbar";

const courseData: CourseData = {
  title: "Desarrollo Básico en Java",
  description: "Domina los fundamentos de la programación en Java, aprendiendo desde la sintaxis básica hasta conceptos como estructuras de control, programación orientada a objetos y manejo de excepciones. Este curso está diseñado para principiantes y te prepara para crear tus primeras aplicaciones Java.",
  sessions: [
    {
      id: 1,
      title: "Introducción a Java y Configuración del Entorno de Desarrollo",
      thumbnail: "https://images.unsplash.com/photo-1517650862521-d580d5348145?w=800&q=80",
      duration: "45:30",
      sessionNumber: 1
    },
    {
      id: 2,
      title: "Sintaxis Básica de Java y Tipos de Datos",
      thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
      duration: "52:15",
      sessionNumber: 2
    },
    {
      id: 3,
      title: "Control de Flujo: Condicionales y Bucles",
      thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
      duration: "48:20",
      sessionNumber: 3
    },
    {
      id: 4,
      title: "Programación Orientada a Objetos en Java",
      thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      duration: "56:45",
      sessionNumber: 4
    },
    {
      id: 5,
      title: "Manejo de Excepciones y Archivos",
      thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      duration: "50:10",
      sessionNumber: 5
    },
    {
      id: 6,
      title: "Introducción a las Colecciones y Streams en Java",
      thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
      duration: "47:30",
      sessionNumber: 6
    }
  ]
};

export function CourseView() {
  const { isWatched, toggleWatched } = useWatchedSessions();

  return (
    <>
      <Navbar />
      <div className="py-12">
        <Container>
          <CourseHeader
            title={courseData.title}
            description={courseData.description} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseData.sessions.map((session) => (
              <SessionVideoCard
                key={session.id}
                {...session}
                isWatched={isWatched(session.id)}
                onToggleWatched={toggleWatched} />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}