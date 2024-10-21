import React from 'react';
import Image from 'next/image';  // Importamos el componente Image de Next.js
import imagenContribuidor from '../components/assets/1.jpg';  // Asegúrate de que la ruta sea correcta

// Definimos la estructura del tipo de los contribuyentes
interface Contribuidor {
  nombre: string;
  rol: string;
  contribuciones: number;
}

// Creamos una lista de contribuyentes
const contribuyentes: Contribuidor[] = [
  { nombre: "Elba", rol: "P.M", contribuciones: 245 },
  { nombre: "Miriam", rol: "Mkt", contribuciones: 45 },
  { nombre: "Violeta", rol: "Admin", contribuciones: 65 },
  { nombre: "Natalia", rol: "Técnico", contribuciones: 12 },
  { nombre: "Rosa", rol: "Creativo", contribuciones: 58 },
  { nombre: "Luisa", rol: "P.M", contribuciones: 42 },
  { nombre: "Sol", rol: "Creativo", contribuciones: 245 },
];

const Contribuidores: React.FC = () => {
  return (
    <div className="contributors mt-10">
      <h2 className="text-center text-2xl font-bold mb-6">Contribuidores</h2>
      <div className="flex flex-wrap justify-center">
        {contribuyentes.map((contribuidor, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden text-center p-6">
              <Image
                src={imagenContribuidor}
                alt={contribuidor.nombre}
                className="rounded-full mx-auto mb-4"
                width={100}  // Ancho de la imagen
                height={100} // Alto de la imagen
              />
              <h3 className="text-lg font-semibold">{contribuidor.nombre}</h3>
              <p className="text-gray-500">{contribuidor.rol}</p>
              <p className="text-gray-600">{contribuidor.contribuciones} contribuciones</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contribuidores;
