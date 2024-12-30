import React from 'react';
import { Bell } from 'lucide-react';

interface ProfileWidgetProps {
  className?: string;
  fullName?: string;
  username?: string;
  profileImageUrl?: string; // URL de la imagen de perfil
  circleColor?: string; // Color del círculo (ej: "bg-red-500")
}

const ProfileWidget: React.FC<ProfileWidgetProps> = ({
  className,
  fullName = "Jose Leon Reyes",
  username = "jleon1227",
  profileImageUrl,
  circleColor = "bg-gray-500" // Color predeterminado si no se pasa uno
}) => {
  const [notificationCount, setNotificationCount] = React.useState(0);
  return (
    <div className="group flex-none flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 transition duration-300 rounded p-2">
      {/* Contenedor del Icono de la Campana */}
      <div className="flex-none relative size-8 p-2 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition duration-300">
        <Bell className="text-white" />
        {notificationCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
            {notificationCount}
          </span>
        )}
      </div>

      <div className={`${className} flex-shrink-0 flex items-center space-x-2`}>

      {/* Foto de Perfil o Inicial en Círculo */}
      <div className="size-8">
        {profileImageUrl ? (
          <img
            src={profileImageUrl}
            alt="Profile"
            className="size-full rounded-full object-cover"
          />
        ) : (
          <div
            className={`size-full rounded-full flex items-center justify-center text-white ${circleColor}`}
          >
            {fullName.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      {/* Información del Usuario */}
      <div>
        <span className="text-sm/3 text-gray-300 group-hover:text-white">{fullName}</span>
        <p className="text-xs/3 text-gray-400">@{username}</p>
      </div>
      </div>
    </div>
  );
};

export default ProfileWidget;
