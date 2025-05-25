// constants/productos.ts

// Definir los tipos
export interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  descripcion?: string;
  categoria: string;
}

// Interfaz para las categorías con imagen
export interface Categoria {
  id: string;
  nombre: string;
  imagen: string; // Agregamos el campo imagen
}

// Categorías de productos CON IMÁGENES
export const categorias: Categoria[] = [
  { 
    id: 'medicamentos', 
    nombre: 'Medicamentos farmacéuticos',
    imagen: '/assets/categorias/farmaceuticos.jpg'
  },
  { 
    id: 'medicinales', 
    nombre: 'Productos medicinales',
    imagen: '/assets/categorias/medicinales.jpg'
  },
  { 
    id: 'cosmeticos', 
    nombre: 'Cosméticos',
    imagen: '/assets/categorias/cosmeticos.jpg'
  },
  { 
    id: 'tocador', 
    nombre: 'Artículos de tocador',
    imagen: '/assets/categorias/tocador.jpg'
  },
  { 
    id: 'quirurgico', 
    nombre: 'Material médico quirúrgico',
    imagen: '/assets/categorias/materialmedico.jpg'
  },
  { 
    id: 'papeleria', 
    nombre: 'Papelería y aseo',
    imagen: '/assets/categorias/aseo.jpg'
  }
];


export const productosQuirurgico: Producto[] = [
  {
    id: 401,
    nombre: 'Guantes Quirúrgicos',
    imagen: '/assets/productos/quirurgico/guantes.jpg',
    descripcion: 'Guantes de látex diseñados para garantizar una barrera segura contra contaminantes. Ideales para cirugías y prácticas médicas que requieren máxima higiene.',
    categoria: 'quirurgico'
  },
  {
    id: 402,
    nombre: 'Gasas Estériles',
    imagen: '/assets/productos/quirurgico/gasas.jpg',
    descripcion: 'Gasas de alta absorción, ideales para cubrir lesiones, detener hemorragias o proteger áreas quirúrgicas. Presentación individual para asegurar la esterilidad.',
    categoria: 'quirurgico'
  },
  {
    id: 403,
    nombre: 'Suturas Quirurgicas',
    imagen: '/assets/productos/quirurgico/suturas.jpg',
    descripcion: 'Suturas estériles de uso médico, diseñadas para una cicatrización efectiva y mínima reacción tisular. Disponibles en múltiples calibres y materiales.',
    categoria: 'quirurgico'
  },
  {
    id: 404,
    nombre: 'Pinzas Hermostaticas',
    imagen: '/assets/productos/quirurgico/pinzas.jpg',
    descripcion: 'Instrumento esencial para la oclusión de vasos sanguíneos. Fabricadas en acero inoxidable, con excelente precisión y agarre.',
    categoria: 'quirurgico'
  },
  {
    id: 405,
    nombre: 'Separadores Quirurgicos',
    imagen: '/assets/productos/quirurgico/separador.jpg',
    descripcion: 'Herramienta clave para mantener abiertas las cavidades quirúrgicas. Permiten al equipo médico trabajar con mayor comodidad y eficacia durante procedimientos prolongados.',
    categoria: 'quirurgico'
  }
];



// Mapa de categorías a productos para facilitar el acceso
export const productosMap = {
  quirurgico: productosQuirurgico,
};

// Función auxiliar para obtener todos los productos en un solo array
export const obtenerTodosProductos = (): Producto[] => {
  return [

    ...productosQuirurgico,
  ];
};