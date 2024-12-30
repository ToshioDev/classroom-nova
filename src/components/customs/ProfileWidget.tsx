import React from 'react';
import { Bell } from 'lucide-react';

interface ProfileWidgetProps {
    fullName?: string;
    username?: string;
    profileImageUrl?: string; // URL de la imagen de perfil
    circleColor?: string; // Color del círculo (ej: "bg-red-500")
}

const ProfileWidget: React.FC<ProfileWidgetProps> = ({ 
    fullName = "Jose Leon Reyes", 
    username = "jleon1227", 
    profileImageUrl, 
    circleColor = "bg-gray-500" // Color predeterminado si no se pasa uno
}) => {
    const [notificationCount, setNotificationCount] = React.useState(0);

    return (
        <div className="flex items-center space-x-4 bg-gray-900 hover:bg-gray-800 transition duration-300 rounded p-2">
            {/* Contenedor del Icono de la Campana */}
            <div className="relative w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition duration-300">
                <Bell className="text-white" />
                {notificationCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                        {notificationCount}
                    </span>
                )}
            </div>

            {/* Foto de Perfil o Inicial en Círculo */}
            <div className="relative w-10 h-10">
                {profileImageUrl ? (
                    <img
                        src={profileImageUrl}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                    />
                ) : (
                    <div
                        className={`w-full h-full rounded-full flex items-center justify-center text-white ${circleColor}`}
                    >
                        {fullName.charAt(0).toUpperCase()}
                    </div>
                )}
            </div>

            {/* Información del Usuario */}
            <div>
                <span className="text-gray-300 hover:text-white font-medium">{fullName}</span>
                <p className="text-sm text-gray-400">@{username}</p>
            </div>
        </div>
    );
};

export default ProfileWidget;
