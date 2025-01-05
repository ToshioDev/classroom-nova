import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import logo from '../../assets/logo.svg';
import ProfileWidget from '../customs/ProfileWidget';
import { useNavigate } from 'react-router-dom';
import NotificationDrawer from './NotificationDrawer';
import MenuDrawer from './MenuDrawer';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    interface Notification {
        id: number;
        message: string;
        timestamp: string;
        read: boolean;
    }

    const [notifications, setNotifications] = useState<Notification[]>([]);

    useEffect(() => {
        fetch('./src/notification.json')
            .then(response => response.json())
            .then(data => {
                setNotifications(data.notifications);
            })
            .catch(error => console.error('Error fetching notifications:', error));
    }, []);

    const handleNavigation = (path: string) => {
        navigate(path);
    };

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
                    {/* Add any additional buttons here if needed */}
                </div>
                <div className="flex items-center space-x-4 ml-auto">
                    <ProfileWidget />
                </div>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden w-full">
                {/* Mobile Top Bar */}
                <div className="flex items-center justify-between h-20">
                    <div className="flex items-center pr-2">
                        <MenuDrawer handleNavigation={handleNavigation} />
                    </div>
                     <div className="flex items-center justify-center flex-1">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-10 cursor-pointer"
                            onClick={() => navigate('/')}
                        />
                    </div>
                   <div className="flex items-center pl-2">
                        <NotificationDrawer notifications={notifications} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
