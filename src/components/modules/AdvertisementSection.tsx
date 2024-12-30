import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, BookOpen } from 'lucide-react';
import PromotionalBanner from '../customs/PromotionalBanner';

export default function AdvertisementSection() {
  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Ofertas Especiales</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <GraduationCap className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Programa de Becas 2024</h3>
              <p className="mb-4">Obtén hasta 70% de descuento en nuestros programas completos</p>
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                Aplicar ahora
              </button>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-rose-500 to-pink-600 text-white">
            <CardContent className="p-6">
              <BookOpen className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Curso Introductorio Gratis</h3>
              <p className="mb-4">Comienza tu viaje en programación con nuestro curso básico gratuito</p>
              <button className="bg-white text-rose-600 px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                Inscribirse
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div>
        <h2 className="text-2xl font-bold mb-4">Promociones Destacadas</h2>
        <PromotionalBanner />
      </div>
    </section>
  );
}