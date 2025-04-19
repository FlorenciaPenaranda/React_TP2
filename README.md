# 🛍️ My E-commerce App

¡Bienvenido a **My E-commerce App**! 🎉 Este es un proyecto web que simula una tienda online donde los usuarios pueden explorar productos, ver sus precios y realizar compras. Está construido con **React** ⚛️ y **Tailwind CSS** 🖌️ para ofrecer una experiencia de usuario dinámica y estilizada.

## 🔧 Tecnologías utilizadas

- **React** ⚛️: Librería de JavaScript para construir interfaces de usuario.
- **Tailwind CSS** 🖌️: Framework CSS para una maquetación rápida y estilizada.
- **JSON** 📦: Para almacenar los datos de productos.
- **State Management** 🧠: Uso de estados para manejar la lógica de la aplicación, como la cantidad de productos disponibles.

## 🚀 Características

- **Página de inicio** 🏠: Muestra una lista de productos con su imagen, nombre, precio original, precio con descuento y cantidad disponible.
- **Botón de compra** 🛒: Permite agregar productos al carrito. Si no hay stock disponible, el botón se deshabilita.
- **Descuento visible** 💸: Calcula el porcentaje de descuento y lo muestra en la interfaz.
- **Interactividad** ✨: Después de realizar una compra, un mensaje de agradecimiento es mostrado debajo del botón.

## 📝 Instalación

Sigue estos pasos para instalar y ejecutar el proyecto:

- **1. Clona este repositorio:**

   git clone https://github.com/tu-usuario/my-ecommerce-app.git

- **2. Navega a la carpeta del proyecto:**

    cd my-ecommerce-app

- **3. Instala las dependencias necesarias:**

    npm install

- **4. Ejecuta el proyecto localmente:**

    npm start
    El proyecto estará disponible en http://localhost:3000.

## 🗂️ Estructura del proyecto

my-ecommerce-app/
├── src/
│   ├── app/
│   │   └── my-ecommerce-app.jsx    # Componente raíz de la aplicación
│   ├── components/
│   │   └── ProductCard.jsx     # Componente que muestra la tarjeta de cada producto
│   ├── services/
│   │   └── productsData.json   # Archivo JSON que contiene la información de los productos
│   ├── main.jsx    # Componente de entrada de la aplicación
│   ├── App.jsx     # Componente principal que organiza la aplicación
│   └── index.js    # Punto de entrada de la aplicación
├── tailwind.config.js  # Configuración de Tailwind CSS
└── package.json    # Dependencias y configuraciones del proyecto

**my-ecommerce-app.jsx 📱:** Componente raíz de la aplicación.

**ProductCard.jsx 💳:** Componente que muestra la tarjeta de cada producto con sus detalles.

**productsData.json 📊:** Archivo JSON que contiene la información de los productos.

**main.jsx 🏠:** Componente principal que renderiza la lista de productos.

**App.jsx 📱:** Componente que organiza la aplicación.

**tailwind.config.js ⚙️:** Configuración de Tailwind CSS.

##  🤝 Contribuciones
Si deseas contribuir a este proyecto, por favor sigue estos pasos:

- **1. Haz un fork del proyecto 🍴.**

- **2. Crea una rama para tu nueva característica o corrección:**

    git checkout -b feature/nueva-funcionalidad

- **3. Haz los cambios necesarios y realiza un commit:**

    git commit -am 'Agrega nueva funcionalidad'

- **4. Haz push de tu rama:**

    git push origin feature/nueva-funcionalidad

- **5. Abre un pull request 📝.**

##  📝 Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.