import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card';
import { Label } from './ui/label';
import { Github, User, Lock, LogIn } from 'lucide-react';

export function Login() {
  const [novaId, setNovaId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Intento de inicio de sesión con:', { novaId, password });
  };

  const handleGithubLogin = () => {
    console.log('Inicio de sesión con GitHub clicado');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Hola de Vuelta</CardTitle>
          <CardDescription className="text-center">
            Inicia sesión en tu cuenta para continuar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="novaId" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Nova ID
              </Label>
              <Input
                id="novaId"
                type="text"
                placeholder="Ingresa tu Nova ID"
                value={novaId}
                onChange={(e) => setNovaId(e.target.value)}
                required
                className="pl-8"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center gap-2">
                <Lock className="h-4 w-4" />
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="Ingresa tu contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-8"
              />
            </div>
            <Button type="submit" className="w-full flex items-center justify-center gap-2">
              <LogIn className="h-4 w-4" />
              Iniciar sesión
            </Button>
            <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">o</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
            <Button
              variant="outline"
              onClick={handleGithubLogin}
              className="w-full flex items-center gap-2"
            >
              <Github className="mr-2 h-4 w-4" />
              Iniciar sesión con GitHub
            </Button>
          </form>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}
