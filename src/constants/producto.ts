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
  },
  {
    id: 1013,
    nombre: 'Enalapril 5mg x 50 tab',
    imagen: '/assets/productos/medicamentos/enalapril-5-50tab.jpg',
    descripcion: 'Antihipertensivo IECA que ayuda a controlar la presión arterial.',
    categoria: 'medicamentos'
  },
  {
    id: 1014,
    nombre: 'Cetirizina 10mg x 60 tab',
    imagen: '/assets/productos/medicamentos/cetirizina-10-60tab.jpg',
    descripcion: 'Antihistamínico de acción prolongada para aliviar síntomas de alergia.',
    categoria: 'medicamentos'
  },
  {
    id: 1015,
    nombre: 'Naproxeno 500mg x 100 tab',
    imagen: '/assets/productos/medicamentos/naproxeno-500-100tab.jpg',
    descripcion: 'Analgésico y antiinflamatorio para dolor muscular y articular.',
    categoria: 'medicamentos'
  },
  {
    id: 1016,
    nombre: 'Diclofenaco LP 100mg x 20 cap',
    imagen: '/assets/productos/medicamentos/diclofenaco-lp-100-20cap.jpg',
    descripcion: 'Antiinflamatorio de liberación prolongada para control de dolor e inflamación.',
    categoria: 'medicamentos'
  },
  {
    id: 1017,
    nombre: 'Ciprofloxacino 500mg x 10 cap',
    imagen: '/assets/productos/medicamentos/ciprofloxacino-500-10cap.jpg',
    descripcion: 'Antibiótico quinolona de amplio espectro para infecciones bacterianas.',
    categoria: 'medicamentos'
  },
  {
    id: 1018,
    nombre: 'Norfloxacina 400mg x 16 tab',
    imagen: '/assets/productos/medicamentos/norfloxacina-400-16tab.jpg',
    descripcion: 'Antibiótico para infecciones del tracto urinario y gastrointestinal.',
    categoria: 'medicamentos'
  },
  {
    id: 1019,
    nombre: 'Amitriptilina 25mg x 60 tab',
    imagen: '/assets/productos/medicamentos/amitriptilina-25-60tab.jpg',
    descripcion: 'Antidepresivo tricíclico usado también para dolor neuropático.',
    categoria: 'medicamentos'
  },
  {
    id: 1020,
    nombre: 'Trimebutina Maleato 200mg x 30 tab',
    imagen: '/assets/productos/medicamentos/trimebutina-200-30tab.jpg',
    descripcion: 'Antiespasmódico regulador de la motilidad gastrointestinal.',
    categoria: 'medicamentos'
  },
  {
    id: 1021,
    nombre: 'Aciclovir 800mg x 10 tab',
    imagen: '/assets/productos/medicamentos/aciclovir-800-10tab.jpg',
    descripcion: 'Antiviral para el manejo de infecciones por herpes.',
    categoria: 'medicamentos'
  },
  {
    id: 1022,
    nombre: 'Sulfato Ferroso 300mg x 30 tab',
    imagen: '/assets/productos/medicamentos/sulfato-ferroso-300-30tab.jpg',
    descripcion: 'Suplemento de hierro para prevención y tratamiento de anemia ferropénica.',
    categoria: 'medicamentos'
  },
  {
    id: 1023,
    nombre: 'Diosmina 500mg x 30 tab',
    imagen: '/assets/productos/medicamentos/diosmina-500-30tab.jpg',
    descripcion: 'Flebotónico para aliviar síntomas de insuficiencia venosa y hemorroides.',
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

export const productosCosmeticos: Producto[] = [
  {
    id: 3001,
    nombre: 'Tinte Color-1 Líquido',
    imagen: '/assets/productos/cosmeticos/tinte-color1-liquido.jpg',
    descripcion: 'Tinte capilar de aplicación líquida que cubre canas y aporta un color uniforme y duradero. Fácil de aplicar y con acabado profesional.',
    categoria: 'cosmeticos'
  },
  {
    id: 3002,
    nombre: 'Acetato de Aluminio x 500 ml',
    imagen: '/assets/productos/cosmeticos/acetato-aluminio-500ml.jpg',
    descripcion: 'Solución astringente de uso tópico ideal para refrescar y calmar la piel. Útil en enrojecimientos leves y picaduras.',
    categoria: 'cosmeticos'
  },
  {
    id: 3003,
    nombre: 'Ice Gel Caléndula y Árnica 110 g',
    imagen: '/assets/productos/cosmeticos/icegel-calendula-arnica-110g.jpg',
    descripcion: 'Gel refrescante con caléndula y árnica que ayuda a aliviar la sensación de cansancio y aporta frescura inmediata a la piel.',
    categoria: 'cosmeticos'
  },
  {
    id: 3004,
    nombre: 'Ice Gel María Juana 100 g',
    imagen: '/assets/productos/cosmeticos/icegel-maria-juana-100g.jpg',
    descripcion: 'Gel corporal de efecto frío con extractos botánicos que proporciona sensación de alivio y descanso en zonas fatigadas.',
    categoria: 'cosmeticos'
  },
  {
    id: 3005,
    nombre: 'Shampoo Color-1',
    imagen: '/assets/productos/cosmeticos/shampoo-color1.jpg',
    descripcion: 'Shampoo formulado para proteger y prolongar el color del cabello teñido, aportando brillo y suavidad desde el primer lavado.',
    categoria: 'cosmeticos'
  },
  {
    id: 3006,
    nombre: 'Repelente en Spray 120 ml',
    imagen: '/assets/productos/cosmeticos/repelente-spray-120ml.jpg',
    descripcion: 'Spray repelente de insectos de rápida absorción y sensación ligera. Ideal para uso diario al aire libre.',
    categoria: 'cosmeticos'
  },
  {
    id: 3007,
    nombre: 'Ice Gel Árnica 110 g',
    imagen: '/assets/productos/cosmeticos/icegel-arnica-110g.jpg',
    descripcion: 'Gel refrescante con árnica que ayuda a reconfortar la piel tras la actividad física y brinda una agradable sensación de frescura.',
    categoria: 'cosmeticos'
  },
  {
    id: 3008,
    nombre: 'Tinte para Cejas Color-1',
    imagen: '/assets/productos/cosmeticos/tinte-cejas-color1.jpg',
    descripcion: 'Kit de tinte para cejas que define, pigmenta y realza la mirada con un resultado natural y de larga duración.',
    categoria: 'cosmeticos'
  },
  {
    id: 3009,
    nombre: 'Aceite Corporal de Coco 240 ml',
    imagen: '/assets/productos/cosmeticos/aceite-coco-240ml.jpg',
    descripcion: 'Aceite hidratante con aroma a coco que nutre la piel y deja un acabado sedoso. Ideal para masajes y después de la ducha.',
    categoria: 'cosmeticos'
  },
  {
    id: 3010,
    nombre: 'Polvo Decolorante Plex x 10 g',
    imagen: '/assets/productos/cosmeticos/polvo-decolorante-plex-10g.jpg',
    descripcion: 'Polvo decolorante con tecnología plex que ayuda a proteger la fibra capilar durante el proceso, logrando aclaraciones uniformes.',
    categoria: 'cosmeticos'
  },
  {
    id: 3011,
    nombre: 'Silicona Capilar 10 ml',
    imagen: '/assets/productos/cosmeticos/silicona-capilar-10ml.jpg',
    descripcion: 'Tratamiento en gotas que sella puntas, controla el frizz y aporta brillo instantáneo sin dejar el cabello pesado.',
categoria: 'cosmeticos'
},
{
id: 3012,
nombre: 'Removedor de Esmalte 90 ml',
imagen: '/assets/productos/cosmeticos/removedor-esmalte-90ml.jpg',
descripcion: 'Removedor de esmalte eficaz que limpia rápidamente dejando las uñas listas para una nueva aplicación.',
categoria: 'cosmeticos'
}
];

// Artículos de tocador
export const productosTocador: Producto[] = [
{
id: 6001,
nombre: 'Desodorante Unisex Pili Spray x 125 ml',
imagen: '/assets/productos/tocador/desodorante-pili-125ml.jpg',
descripcion: 'Desodorante en spray de rápida absorción con sensación fresca y protección diaria para todo tipo de piel.',
categoria: 'tocador'
},
{
id: 6002,
nombre: 'Jabón de Azufre Pili x 100 gr',
imagen: '/assets/productos/tocador/jabon-azufre-pili-100g.jpg',
descripcion: 'Jabón de tocador con azufre que ayuda a purificar la piel y controlar el exceso de grasa.',
categoria: 'tocador'
},
{
id: 6003,
nombre: 'Dermolimpiador Alimpro x 100 gr',
imagen: '/assets/productos/tocador/dermolimpiador-alimpro-100g.jpg',
descripcion: 'Limpieza suave de uso diario que mantiene la barrera cutánea y deja la piel libre de impurezas.',
categoria: 'tocador'
},
{
id: 6004,
nombre: 'Ungüento Alimpro x 500 g',
imagen: '/assets/productos/tocador/unguento-alimpro-500g.jpg',
descripcion: 'Ungüento emoliente de uso tópico que suaviza y protege zonas resecas de la piel.',
categoria: 'tocador'
},
{
id: 6005,
nombre: 'Agua Oxigenada x 100 ml',
imagen: '/assets/productos/tocador/agua-oxigenada-100ml.jpg',
descripcion: 'Solución antiséptica de uso externo para limpieza de pequeñas heridas y raspaduras.',
categoria: 'tocador'
},
{
id: 6006,
nombre: 'Loción Refrescante Pili x 120 ml',
imagen: '/assets/productos/tocador/locion-refrescante-pili-120ml.jpg',
descripcion: 'Loción ligera que tonifica y refresca la piel, ideal para usar durante el día.',
categoria: 'tocador'
},
{
id: 6007,
nombre: 'Agua de Rosas Pili x 250 ml',
imagen: '/assets/productos/tocador/agua-rosas-pili-250ml.jpg',
descripcion: 'Tónico facial de agua de rosas que hidrata, calma y deja la piel con un aroma suave.',
categoria: 'tocador'
},
{
id: 6008,
nombre: 'Gel de Áloe Vera x 1000 gr',
imagen: '/assets/productos/tocador/gel-aloe-1000g.jpg',
descripcion: 'Gel corporal con áloe vera que brinda hidratación y sensación calmante en piel expuesta al sol.',
categoria: 'tocador'
},
{
id: 6009,
nombre: 'Jabón Carbón Activado Pili x 100 gr',
imagen: '/assets/productos/tocador/jabon-carbon-pili-100g.jpg',
descripcion: 'Jabón purificante con carbón activado que ayuda a desintoxicar y limpiar profundamente.',
categoria: 'tocador'
},
{
id: 6010,
nombre: 'Kit Alimpro Recién Nacido',
imagen: '/assets/productos/tocador/kit-alimpro-rn.jpg',
descripcion: 'Kit de cuidado básico para recién nacidos con productos suaves y hipoalergénicos.',
categoria: 'tocador'
},
{
id: 6011,
nombre: 'Tratamiento Capilar Pacífico x 1000 gr',
imagen: '/assets/productos/tocador/tratamiento-capilar-pacifico-1000g.jpg',
descripcion: 'Tratamiento intensivo que nutre profundamente, controla el frizz y mejora la manejabilidad.',
categoria: 'tocador'
},
{
id: 6012,
nombre: 'Limpiador Syndet Alimpro x 500 ml',
imagen: '/assets/productos/tocador/limpiador-syndet-alimpro-500ml.jpg',
descripcion: 'Limpieza sin jabón para piel sensible que ayuda a mantener el pH y la hidratación natural.',
categoria: 'tocador'
}
];

// Papelería y aseo
export const productosPapeleria: Producto[] = [
{
id: 7001,
nombre: 'Toallas Húmedas Winny',
imagen: '/assets/productos/papeleria/toallas-humedas-winny.jpg',
descripcion: 'Toallitas húmedas suaves y resistentes, ideales para el cuidado diario del bebé y uso familiar.',
categoria: 'papeleria'
},
{
id: 7002,
nombre: 'Pañales Winny',
imagen: '/assets/productos/papeleria/panales-winny.jpg',
descripcion: 'Pañales con buena absorción y ajuste cómodo para mantener al bebé seco por más tiempo.',
categoria: 'papeleria'
}
];

export const productosMap = {
medicamentos: productosMedicamentos,
medicinales: productosMedicinales,
cosmeticos: productosCosmeticos,
tocador: productosTocador,
papeleria: productosPapeleria,
quirurgico: productosQuirurgico,
};

// Función auxiliar para obtener todos los productos en un solo array
export const obtenerTodosProductos = (): Producto[] => {
return [
...productosMedicamentos,
...productosMedicinales,
...productosCosmeticos,
...productosTocador,
...productosPapeleria,
...productosQuirurgico,
];
};