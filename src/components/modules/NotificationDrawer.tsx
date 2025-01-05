import React from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet';
import { Button } from '../ui/button';
import { Bell } from 'lucide-react';
import { Badge } from '../ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';

interface Notification {
    id: number;
    message: string;
    timestamp: string;
    read: boolean;
}

interface NotificationDrawerProps {
    notifications: Notification[];
}

const NotificationDrawer: React.FC<NotificationDrawerProps> = ({ notifications }) => {
    return (
        <Sheet {...{side: "right"}}>
            <SheetTrigger asChild>
                <Button variant="outline" className="relative">
                    <Bell className="w-5 h-5" />
                    {notifications.filter(notification => !notification.read).length > 0 && (
                        <Badge className="absolute -top-1 -right-1 rounded-full px-2 text-xs">
                            {notifications.filter(notification => !notification.read).length}
                        </Badge>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Notifications</SheetTitle>
                    <SheetDescription>Check your notifications</SheetDescription>
                </SheetHeader>
                 <div className="p-4">
                    {notifications.length > 0 ? (
                        <ul className="space-y-2">
                            {notifications.map((notification) => (
                                <li key={notification.id} className="mb-2">
                                    <Card className="w-full">
                                        <CardHeader>
                                            <CardTitle className="text-left">{notification.message}</CardTitle>
                                            <CardDescription className="text-left">{new Date(notification.timestamp).toLocaleString()}</CardDescription>
                                        </CardHeader>
                                    </Card>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No notifications available</p>
                    )}
                </div>
                
            </SheetContent>
        </Sheet>
    );
};

export default NotificationDrawer;
