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

export const productosMedicinales: Producto[] = [
  {
    id: 2001,
    nombre: 'Ensure Advance x 400gr',
    imagen: '/assets/productos/medicinales/ensure-advance-400gr.jpg',
    descripcion: 'Suplemento nutricional completo en polvo.',
    categoria: 'medicinales'
  },
  {
    id: 2002,
    nombre: 'Glucerna x 400gr',
    imagen: '/assets/productos/medicinales/glucerna-400gr.jpg',
    descripcion: 'Nutrición especializada para personas con diabetes.',
    categoria: 'medicinales'
  },
  {
    id: 2003,
    nombre: 'Glucerna x 273 ml',
    imagen: '/assets/productos/medicinales/glucerna-273ml.jpg',
    descripcion: 'Bebida nutricional lista para tomar.',
    categoria: 'medicinales'
  },
  {
    id: 2004,
    nombre: 'Pediasure x 400gr',
    imagen: '/assets/productos/medicinales/pediasure-400gr.jpg',
    descripcion: 'Suplemento para apoyar el crecimiento infantil.',
    categoria: 'medicinales'
  },
  {
    id: 2005,
    nombre: 'Nepro BP 8oz',
    imagen: '/assets/productos/medicinales/nepro-bp-8oz.jpg',
    descripcion: 'Fórmula nutricional para pacientes renales.',
    categoria: 'medicinales'
  },
  {
    id: 2006,
    nombre: 'Pediasure x 220 ml',
    imagen: '/assets/productos/medicinales/pediasure-220ml.jpg',
    descripcion: 'Bebida nutricional infantil lista para consumo.',
    categoria: 'medicinales'
  },
  {
    id: 2007,
    nombre: 'Ensure Advance x 850gr',
    imagen: '/assets/productos/medicinales/ensure-advance-850gr.jpg',
    descripcion: 'Presentación familiar del suplemento nutricional.',
    categoria: 'medicinales'
  },
  {
    id: 2008,
    nombre: 'Ensure Advance x 220ml',
    imagen: '/assets/productos/medicinales/ensure-advance-220ml.jpg',
    descripcion: 'Bebida nutricional lista para tomar.',
    categoria: 'medicinales'
  }
];

export const productosMedicamentos: Producto[] = [
  {
    id: 1001,
    nombre: 'Acetaminofén 500mg x 100 tab',
    imagen: '/assets/productos/medicamentos/acetaminofen-500-100tab.jpg',
    descripcion: 'Analgésico y antipirético.',
    categoria: 'medicamentos'
  },
  {
    id: 1002,
    nombre: 'Diclofenaco Retard 100mg x 20 cap',
    imagen: '/assets/productos/medicamentos/diclofenaco-retard-100-20cap.jpg',
    descripcion: 'Antiinflamatorio no esteroideo de liberación prolongada.',
    categoria: 'medicamentos'
  },
  {
    id: 1003,
    nombre: 'Ibuprofeno 800mg x 50 tab',
    imagen: '/assets/productos/medicamentos/ibuprofeno-800-50tab.jpg',
    descripcion: 'Antiinflamatorio y analgésico.',
    categoria: 'medicamentos'
  },
  {
    id: 1004,
    nombre: 'Naproxeno 250mg x 10 tab',
    imagen: '/assets/productos/medicamentos/naproxeno-250-10tab.jpg',
    descripcion: 'Analgésico y antiinflamatorio.',
    categoria: 'medicamentos'
  },
  {
    id: 1005,
    nombre: 'Cefradina 500mg x 24 cap',
    imagen: '/assets/productos/medicamentos/cefradina-500-24cap.jpg',
    descripcion: 'Antibiótico cefalosporina.',
    categoria: 'medicamentos'
  },
  {
    id: 1006,
    nombre: 'Sildenafil 50mg x 2 tab',
    imagen: '/assets/productos/medicamentos/sildenafil-50-2tab.jpg',
    descripcion: 'Tratamiento de la disfunción eréctil.',
    categoria: 'medicamentos'
  },
  {
    id: 1007,
    nombre: 'Hidrocortisona crema al 1% x 15g',
    imagen: '/assets/productos/medicamentos/hidrocortisona-1-15g.jpg',
    descripcion: 'Corticosteroide tópico para irritaciones cutáneas.',
    categoria: 'medicamentos'
  },
  {
    id: 1008,
    nombre: 'Betametasona crema al 0.1% x 20g',
    imagen: '/assets/productos/medicamentos/betametasona-0_1-20g.jpg',
    descripcion: 'Corticosteroide tópico.',
    categoria: 'medicamentos'
  },
  {
    id: 1009,
    nombre: 'Loratadina 10mg x 400 tab',
    imagen: '/assets/productos/medicamentos/loratadina-10-400tab.jpg',
    descripcion: 'Antihistamínico para alergias.',
    categoria: 'medicamentos'
  },
  {
    id: 1010,
    nombre: 'Omeprazol 20mg x 30 cap',
    imagen: '/assets/productos/medicamentos/omeprazol-20-30cap.jpg',
    descripcion: 'Inhibidor de la bomba de protones.',
    categoria: 'medicamentos'
  },
  {
    id: 1011,
    nombre: 'Amoxicilina 500mg x 50 cap',
    imagen: '/assets/productos/medicamentos/amoxicilina-500-50cap.jpg',
    descripcion: 'Antibiótico penicilínico.',
    categoria: 'medicamentos'
  },
  {
    id: 1012,
    nombre: 'Fluconazol 200mg x 4 cap',
    imagen: '/assets/productos/medicamentos/fluconazol-200-4cap.jpg',
    descripcion: 'Antifúngico de amplio espectro.',
    categoria: 'medicamentos'
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
  medicamentos: productosMedicamentos,
  medicinales: productosMedicinales,
  quirurgico: productosQuirurgico,
};

// Función auxiliar para obtener todos los productos en un solo array
export const obtenerTodosProductos = (): Producto[] => {
  return [
    ...productosMedicamentos,
    ...productosMedicinales,
    ...productosQuirurgico,
  ];
};