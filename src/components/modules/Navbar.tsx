import { Bell, BookOpen, DollarSign, Eye, Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import logo from '../../assets/logo.svg';
import ProfileWidget from '../customs/ProfileWidget';
import { useNavigate } from 'react-router-dom';
import NotificationDrawer from './NotificationDrawer';
import MenuDrawer from './MenuDrawer';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [notificationCount, setNotificationCount] = React.useState(0);

    const handleNavigation = (path: string) => {
        navigate(path); // Redirect to the specified path
        setIsMobileMenuOpen(false);
    };

    const NavButtons = () => (
        <>
            <Button
                className="relative max-md:w-full max-md:justify-center"
                onClick={() => handleNavigation('/')}
            >
                <BookOpen className="w-5 h-5" />
                <span>HomeWork Space</span>
                <span className="absolute -top-4 right-[116px] bg-yellow-500 text-white rounded-full px-2 text-xs max-md:hidden">
                    Pronto
                </span>
            </Button>
            <Button
                className="relative max-md:w-full max-md:justify-center"
                onClick={() => handleNavigation('/vision')}
            >
                <Eye className="w-5 h-5" />
                <span>Nova Vision</span>
                <span className="absolute -top-4 right-[80px] bg-red-500 text-white rounded-full px-2 text-xs max-md:hidden">
                    Nuevo
                </span>
            </Button>
            <Button
                className="max-md:w-full max-md:justify-center"
                onClick={() => handleNavigation('/pagos')}
            >
                <DollarSign className="w-5 h-5" />
                <span>Pagos</span>
            </Button>
        </>
    );

    return (
        <nav className="bg-black text-white w-full flex items-center justify-between h-20 shadow-md z-10">
            {/* Desktop Navbar */}
            <div className="max-md:hidden flex w-full items-center justify-between px-4 h-20">
                <div className="flex items-center">
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-10 mr-4 cursor-pointer"
                        onClick={() => navigate('/')}
                    />
                </div>
                <div className="flex-1 flex space-x-4 justify-center">
                    <NavButtons />
                </div>
                <div className="flex items-center space-x-4 ml-auto">
                    <ProfileWidget />
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden w-full">
                {/* Mobile Top Bar */}
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center pl-2">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-10 mr-4 cursor-pointer"
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
                    <div className="absolute z-20 bg-black w-full pb-4 space-y-4">
                        <ul className="flex flex-col space-y-4 w-full">
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
                        <div className="border-t border-gray-700 pt-4 w-full">
                            <ProfileWidget />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
