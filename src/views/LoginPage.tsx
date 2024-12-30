import { Login } from '../components/Login';
import placeholderImage from '../assets/bullseye-gradient.svg';
import logo from '../assets/logo.svg';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export function LoginPage() {
  return (
    <div className="flex min-h-screen w-screen h-screen items-center justify-center bg-gray-50">
      <div className="hidden lg:flex flex-col items-center justify-center w-full h-full relative">
        <Button variant="outline" className="absolute top-4 left-4 text-white border-white bg-transparent flex items-center gap-2 hover:text-black hover:border-text-black focus:outline-none" onClick={() => window.location.href='https://beta.academia-nova.com'}>
          <Home className="h-4 w-4" />
          Inicio
        </Button>
        <img src={placeholderImage} alt="Placeholder" className="object-cover w-full h-full" />
        <img 
          src={logo} 
          alt="Logo" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 lg:w-56" 
        />
      </div>
      <div className="w-full lg:w-1/2 p-4 max-h-screen overflow-auto">
        <Login />
      </div>
    </div>
  );
}
