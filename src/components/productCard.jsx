import { useState } from "react";

/**
 * Componente que muestra la tarjeta de cada producto con información detallada
 * e interactividad.
 *
 * - Permite ver nombre, imagen, precio original, precio final, y porcentaje de oferta.
 * - Calcula y muestra el stock disponible.
 * - Muestra un botón de compra que se desactiva cuando no hay stock.
 * - Al hacer una compra, disminuye el stock y muestra un mensaje de agradecimiento.
 *
 * @param {{
*   producto: {
*     nombre: string,
*     imagen: string,
*     precioReal: number,
*     precioFinal: number,
*     porcentajeOferta: number,
*     cantidadDisponible: number
*   }
* }} props - Objeto con la información del producto.
*
* @returns {JSX.Element} La tarjeta visual del producto.
*/
export default function ProductCard({ producto }) {
  const {
    nombre,
    imagen,
    precioReal,
    precioFinal,
    porcentajeOferta,
    cantidadDisponible,
  } = producto;

  const [comprado, setComprado] = useState(false);
  const [cantidad, setCantidad] = useState(cantidadDisponible);

  const handleCompra = () => {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
      setComprado(true);
    }
  };

  return (
    <div className="relative w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      
      {/* Etiqueta de oferta */}
      {porcentajeOferta > 0 && (
        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          -{porcentajeOferta}%
        </div>
      )}

      <img
        className="w-full max-h-48 object-contain rounded-t-lg mx-auto p-4"
        src={imagen}
        alt={nombre}
      />

      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {nombre}
        </h5>

        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < 4 ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">
            5.0
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-gray-500 line-through text-sm">${precioReal}</span>
            <span className="text-3xl font-bold text-gray-900 dark:text-white ml-2">
              ${precioFinal}
            </span>
          </div>
        </div>

        {/* Mostrar cantidad disponible */}
        <div className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          {cantidad > 0 ? (
            <span>{cantidad} unidades disponibles</span>
          ) : (
            <span>Agotado</span>
          )}
        </div>

        {/* Botón de compra */}
        <div className="mt-4 text-center">
          <button
            onClick={handleCompra}
            className={`w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center ${
              cantidad <= 0
                ? "bg-gray-400 cursor-not-allowed" // Botón gris cuando no hay stock
                : "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
            }`}
            disabled={cantidad <= 0}
          >
            Comprar
          </button>

          {comprado && (
            <p className="mt-3 text-green-600 font-semibold">Gracias por su compra</p>
          )}
        </div>
      </div>
    </div>
  );
}