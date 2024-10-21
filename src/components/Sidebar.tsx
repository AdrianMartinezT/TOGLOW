import React from 'react';

// Definimos el tipo de las propiedades, si en el futuro se requieren propiedades adicionales
interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-lg w-full">
      {/* Botón de Contribuidor */}
      <button className="bg-gray-800 text-white w-full mb-4 py-3 rounded-lg">
        Contribuidor
      </button>
      <p className="text-gray-600 text-sm">
        Encuentra una colaboradora brillante en esta pasarela.
      </p>

      {/* Botón de Comunidad */}
      <button className="bg-gray-800 text-white w-full mb-4 py-3 rounded-lg">
        Comunidad
      </button>
      <p className="text-gray-600 text-sm">
        Encuentra comunidades y proyectos para incentivar tu creatividad.
      </p>
    </div>
  );
};

export default Sidebar;
