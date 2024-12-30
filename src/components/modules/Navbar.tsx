import { Bell, BookOpen, DollarSign, Eye, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import logo from '@/assets/logo.svg';
import ProfileWidget from '../customs/ProfileWidget';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  const handleNavigation = (path: string) => {
    navigate(path); // Redirect to the specified path
    setIsMobileMenuOpen(false);
  };

  const NavButtons = () => (
    <>
      <Button
        className="relative"
        onClick={() => handleNavigation('/')}
      >
        <BookOpen className="size-5" />
        <span>HomeWork Space</span>
        <span className="absolute -top-3 left-2 bg-yellow-600 text-white rounded-full px-2 text-xs max-md:hidden">
          Pronto
        </span>
      </Button>
      <Button
        className="relative"
        onClick={() => handleNavigation('/vision')}
      >
        <Eye className="size-5" />
        <span>Nova Vision</span>
        <span className="absolute -top-3 left-2 bg-red-600 text-white rounded-full px-2 text-xs max-md:hidden">
          Nuevo
        </span>
      </Button>
      <Button
        onClick={() => handleNavigation('/pagos')}
      >
        <DollarSign className="size-5" />
        <span>Pagos</span>
      </Button>
    </>
  );

  return (
    <nav className="bg-black text-white w-full h-20">
      {/* Desktop Navbar */}
      <div className="max-md:hidden flex items-center space-x-3 w-full h-20 px-4">
        <div className="flex-none h-full content-center">
          <img
            src={logo}
            alt="Logo"
            className="h-9 mr-4 cursor-pointer"
            onClick={() => navigate('/')}
          />
        </div>
        <div className="flex-1 flex space-x-3 justify-center">
          <NavButtons />
        </div>
        <ProfileWidget className='max-lg:hidden' />
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden w-full">
        {/* Mobile Top Bar */}
        <div className="flex items-center justify-between h-20 px-4">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-9 mr-4 cursor-pointer"
              onClick={() => navigate('/')}
            />
          </div>
          <Button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute z-20 bg-black w-full space-y-4">
            <ul className="flex flex-col space-y-4 w-full px-4">
              <li className="text-gray-300 hover:text-white cursor-pointer w-full" onClick={() => handleNavigation('/')}>
                <BookOpen className="w-5 h-5 inline-block" /> HomeWork Space
              </li>
              <li className="text-gray-300 hover:text-white cursor-pointer w-full" onClick={() => handleNavigation('/vision')}>
                <Eye className="w-5 h-5 inline-block" /> Nova Vision
              </li>
              <li className="text-gray-300 hover:text-white cursor-pointer w-full" onClick={() => handleNavigation('/pagos')}>
                <DollarSign className="w-5 h-5 inline-block" /> Pagos
              </li>
            </ul>
            <div className="border-t border-gray-700 p-4 w-full">
              <ProfileWidget />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
