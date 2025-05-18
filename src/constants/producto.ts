// constants/productos.ts

// Definir los tipos
export interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  descripcion?: string;
  categoria: string;
}

// Categorías de productos
export const categorias = [
  { id: 'medicamentos', nombre: 'Medicamentos farmacéuticos' },
  { id: 'medicinales', nombre: 'Productos medicinales' },
  { id: 'cosmeticos', nombre: 'Cosméticos' },
  { id: 'tocador', nombre: 'Artículos de tocador' },
  { id: 'quirurgico', nombre: 'Material médico quirúrgico' },
  { id: 'papeleria', nombre: 'Papelería y aseo' }
];

// Productos organizados por categoría
export const productosMedicamentos: Producto[] = [
  {
    id: 1,
    nombre: 'Analgésico Oral',
    imagen: '/assets/productos/analgesico.png', // Reemplazar con la ruta correcta
    descripcion: 'Alivio rápido para el dolor leve a moderado',
    categoria: 'medicamentos'
  },
  {
    id: 2,
    nombre: 'Antibiótico Amoxicilina',
    imagen: '/assets/productos/antibiotico.png',
    descripcion: 'Tratamiento para infecciones bacterianas',
    categoria: 'medicamentos'
  },
  {
    id: 3,
    nombre: 'Antihistamínico 24h',
    imagen: '/assets/productos/antihistaminico.png',
    descripcion: 'Alivia síntomas de alergias durante 24 horas',
    categoria: 'medicamentos'
  },
  {
    id: 4,
    nombre: 'Antinflamatorio Ibuprofeno',
    imagen: '/assets/productos/antinflamatorio.png',
    descripcion: 'Reduce la inflamación y alivia el dolor',
    categoria: 'medicamentos'
  },
  {
    id: 5,
    nombre: 'Antitusivo para tos seca',
    imagen: '/assets/productos/antitusivo.png',
    descripcion: 'Alivia la tos seca y no productiva',
    categoria: 'medicamentos'
  }
];

export const productosMedicinales: Producto[] = [
  {
    id: 101,
    nombre: 'Vitamina C 1000mg',
    imagen: '/assets/productos/vitaminac.png',
    descripcion: 'Suplemento dietario para reforzar el sistema inmune',
    categoria: 'medicinales'
  },
  {
    id: 102,
    nombre: 'Complejo B',
    imagen: '/assets/productos/complejob.png',
    descripcion: 'Suplemento de vitaminas del complejo B esenciales',
    categoria: 'medicinales'
  },
  {
    id: 103,
    nombre: 'Calcio + Vitamina D3',
    imagen: '/assets/productos/calcio.png',
    descripcion: 'Suplemento para la salud ósea',
    categoria: 'medicinales'
  },
  {
    id: 104,
    nombre: 'Omega 3',
    imagen: '/assets/productos/omega3.png',
    descripcion: 'Ácidos grasos esenciales para la salud cardiovascular',
    categoria: 'medicinales'
  }
];

export const productosCosmeticos: Producto[] = [
  {
    id: 201,
    nombre: 'Crema Hidratante Facial',
    imagen: '/assets/productos/crema.png',
    descripcion: 'Hidratación profunda para todo tipo de piel',
    categoria: 'cosmeticos'
  },
  {
    id: 202,
    nombre: 'Protector Solar SPF 50',
    imagen: '/assets/productos/protector.png',
    descripcion: 'Protección UVA/UVB de amplio espectro',
    categoria: 'cosmeticos'
  },
  {
    id: 203,
    nombre: 'Loción Corporal',
    imagen: '/assets/productos/locion.png',
    descripcion: 'Hidratación para todo el cuerpo',
    categoria: 'cosmeticos'
  }
];

export const productosTocador: Producto[] = [
  {
    id: 301,
    nombre: 'Jabón Antibacterial',
    imagen: '/assets/productos/jabon.png',
    descripcion: 'Limpieza profunda con acción antibacteriana',
    categoria: 'tocador'
  },
  {
    id: 302,
    nombre: 'Champú Hidratante',
    imagen: '/assets/productos/champu.png',
    descripcion: 'Limpieza e hidratación para todo tipo de cabello',
    categoria: 'tocador'
  },
  {
    id: 303,
    nombre: 'Desodorante Roll-on',
    imagen: '/assets/productos/desodorante.png',
    descripcion: 'Protección 48 horas contra el mal olor',
    categoria: 'tocador'
  }
];

export const productosQuirurgico: Producto[] = [
  {
    id: 401,
    nombre: 'Guantes Quirúrgicos',
    imagen: '/assets/productos/guantes.png',
    descripcion: 'Guantes estériles para procedimientos médicos',
    categoria: 'quirurgico'
  },
  {
    id: 402,
    nombre: 'Vendas Elásticas',
    imagen: '/assets/productos/vendas.png',
    descripcion: 'Soporte y compresión para lesiones',
    categoria: 'quirurgico'
  },
  {
    id: 403,
    nombre: 'Jeringas Desechables',
    imagen: '/assets/productos/jeringas.png',
    descripcion: 'Para administración segura de medicamentos',
    categoria: 'quirurgico'
  }
];

export const productosPapeleria: Producto[] = [
  {
    id: 501,
    nombre: 'Resma de Papel',
    imagen: '/assets/productos/papel.png',
    descripcion: 'Papel multipropósito para impresión',
    categoria: 'papeleria'
  },
  {
    id: 502,
    nombre: 'Limpiador Multiusos',
    imagen: '/assets/productos/limpiador.png',
    descripcion: 'Limpieza efectiva para todas las superficies',
    categoria: 'papeleria'
  },
  {
    id: 503,
    nombre: 'Detergente Líquido',
    imagen: '/assets/productos/detergente.png',
    descripcion: 'Limpieza profunda y cuidado para la ropa',
    categoria: 'papeleria'
  }
];

// Mapa de categorías a productos para facilitar el acceso
export const productosMap = {
  medicamentos: productosMedicamentos,
  medicinales: productosMedicinales,
  cosmeticos: productosCosmeticos,
  tocador: productosTocador,
  quirurgico: productosQuirurgico,
  papeleria: productosPapeleria
};

// Función auxiliar para obtener todos los productos en un solo array
export const obtenerTodosProductos = (): Producto[] => {
  return [
    ...productosMedicamentos,
    ...productosMedicinales,
    ...productosCosmeticos,
    ...productosTocador,
    ...productosQuirurgico,
    ...productosPapeleria
  ];
};