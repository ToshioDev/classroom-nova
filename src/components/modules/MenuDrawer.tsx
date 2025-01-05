import React from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

interface MenuDrawerProps {
    handleNavigation: (path: string) => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ handleNavigation }) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" className="text-white p-2 rounded-md hover:bg-gray-700">
                    <Menu size={24} />
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="p-4">
                    <ul className="flex flex-col space-y-4 w-full">
                        <li className="text-gray-300 hover:text-white cursor-pointer w-full" onClick={() => handleNavigation('/')}>
                            <Button variant="ghost" className="w-full justify-start">HomeWork Space</Button>
                        </li>
                        <li className="text-gray-300 hover:text-white cursor-pointer w-full" onClick={() => handleNavigation('/vision')}>
                            <Button variant="ghost" className="w-full justify-start">Nova Vision</Button>
                        </li>
                        <li className="text-gray-300 hover:text-white cursor-pointer w-full" onClick={() => handleNavigation('/pagos')}>
                            <Button variant="ghost" className="w-full justify-start">Pagos</Button>
                        </li>
                    </ul>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MenuDrawer;
