export interface MenuItem {
  id: string;
  name: string;
  category: 'wings' | 'burgers' | 'sides' | 'drinks' | 'ribs';
  price: number;
  description: string;
  image?: string; // Only set if a REAL photo exists!
  isRealPhoto: boolean;
  isPopular?: boolean;
  badge?: string;
  ingredients?: string[];
  options?: {
    sauces?: string[];
    sides?: string[];
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Comida Real' | 'Ambiente & Bar';
  image: string;
  description: string;
}

export const REAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-wings',
    title: 'Plato Especial de Alitas Bañadas',
    category: 'Comida Real',
    image: '/images/products/wings/wings_platter.jpg',
    description: 'Fotografía real: Alitas crujientes bañadas en salsa especial acompañadas de palitos de apio, zanahoria y aderezo ranch de la casa.'
  },
  {
    id: 'gal-burger',
    title: 'Hamburguesa de la Casa con Papas',
    category: 'Comida Real',
    image: '/images/products/burgers/burger_fries.jpg',
    description: 'Fotografía real: Jugosa hamburguesa artesanal en pan brioche, vegetales frescos y porción abundante de papas sazonadas.'
  },
  {
    id: 'gal-fries',
    title: 'Papas Francesas & Bocados de Queso',
    category: 'Comida Real',
    image: '/images/products/fries/fries_cheese_bites.png',
    description: 'Fotografía real: Canasta de papas francesas doradas con bolitas crocantes de queso y dip especial en espiral.'
  },
  {
    id: 'gal-facade',
    title: 'Fachada & Terraza Nocturna',
    category: 'Ambiente & Bar',
    image: '/images/restaurant/facade_night.jpg',
    description: 'Fotografía real: Nuestro acogedor local de noche con iluminación cálida tipo Edison, terraza y pantallas para partidos.'
  },
  {
    id: 'gal-bar',
    title: 'Servicio de Bar & Vinos',
    category: 'Ambiente & Bar',
    image: '/images/restaurant/wine_drinks_bar.jpg',
    description: 'Fotografía real: Balde helado con vino Santa Inés, copas cristalinas y excelente ambiente deportivo.'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'wings-20-real',
    name: 'Combo Alitas Especiales (Platero de la Casa)',
    category: 'wings',
    price: 32900,
    description: 'Crujientes alitas bañadas en tus salsas preferidas, servidas con apio, zanahoria y dip de la casa. Servido en nuestra tradicional canasta de cuadros.',
    image: '/images/products/wings/wings_platter.jpg',
    isRealPhoto: true,
    isPopular: true,
    badge: '📸 FOTO REAL DEL LOCAL',
    ingredients: ['Alitas Seleccionadas', 'Salsa a elección', 'Vegetales Frescos', 'Dip Ranch/Azul'],
    options: {
      sauces: ['BBQ Original', 'BBQ Picante', 'Buffalo Miel', 'Maracuyá Hot', 'Ajo Parmesano', 'Teriyaki']
    }
  },
  {
    id: 'wings-10',
    name: '10 Alitas Crujientes',
    category: 'wings',
    price: 18500,
    description: '10 piezas de alitas doradas y jugosas con 1 salsa a elección y vegetales de acompañamiento.',
    isRealPhoto: false,
    ingredients: ['10 Alitas', '1 Salsa', 'Vegetales'],
    options: {
      sauces: ['BBQ Original', 'BBQ Picante', 'Buffalo Miel', 'Maracuyá Hot', 'Ajo Parmesano']
    }
  },
  {
    id: 'wings-15',
    name: '15 Alitas Selección',
    category: 'wings',
    price: 26500,
    description: '15 piezas de alitas para compartir con hasta 2 salsas diferentes.',
    isRealPhoto: false,
    ingredients: ['15 Alitas', '2 Salsas', 'Vegetales Frescos'],
    options: {
      sauces: ['BBQ Original', 'BBQ Picante', 'Buffalo Miel', 'Maracuyá Hot', 'Ajo Parmesano']
    }
  },
  {
    id: 'burger-house-real',
    name: 'Hamburguesa Artesanal Wing’s House',
    category: 'burgers',
    price: 24900,
    description: 'Jugosa carne artesanal o filete de pollo empanizado, lechuga fresca, queso derretido y cebolla caramelizada. Acompañada de papas sazonadas y dip especial.',
    image: '/images/products/burgers/burger_fries.jpg',
    isRealPhoto: true,
    isPopular: true,
    badge: '📸 FOTO REAL DEL LOCAL',
    ingredients: ['Pan Artesanal', 'Carne 150g / Pollo', 'Queso Derretido', 'Papas Francesas', 'Dip de la Casa']
  },
  {
    id: 'burger-double-cheese',
    name: 'Doble Queso & Tocino Burger',
    category: 'burgers',
    price: 28900,
    description: 'Doble carne de 120g, doble queso cheddar, tocineta crocante y salsa BBQ de la casa con papas.',
    isRealPhoto: false,
    ingredients: ['Doble Carne', 'Doble Cheddar', 'Tocineta Ahumada', 'Salsa BBQ']
  },
  {
    id: 'burger-bbq-monster',
    name: 'Monster BBQ Rib Burger',
    category: 'burgers',
    price: 31000,
    description: 'Carne jugosa bañada en salsa BBQ, aros de cebolla crocantes, pepinillos y queso americano.',
    isRealPhoto: false,
    ingredients: ['Carne Premium', 'Aros de Cebolla', 'Pepinillos', 'Salsa BBQ']
  },
  {
    id: 'fries-cheese-bites-real',
    name: 'Papas Francesas con Bocados de Queso',
    category: 'sides',
    price: 15900,
    description: 'Abundante porción de papas francesas doradas al punto perfecto, acompañadas de bocaditos crocantes de queso y dip especial en espiral.',
    image: '/images/products/fries/fries_cheese_bites.png',
    isRealPhoto: true,
    isPopular: true,
    badge: '📸 FOTO REAL DEL LOCAL',
    ingredients: ['Papas Francesas', 'Bocaditos de Queso Crocantes', 'Dip Especial']
  },
  {
    id: 'sides-nachos-supreme',
    name: 'Nachos Tex-Mex con Queso & Guacamole',
    category: 'sides',
    price: 17500,
    description: 'Totopos de maíz crujientes cubiertos con queso fundido, carne molida sazonada, jalapeños y suero costeño.',
    isRealPhoto: false,
    ingredients: ['Totopos de Maíz', 'Queso Fundido', 'Jalapeños', 'Guacamole']
  },
  {
    id: 'sides-onion-rings',
    name: 'Aros de Cebolla Crocantes (10u)',
    category: 'sides',
    price: 12900,
    description: 'Aros de cebolla apanados y fritos al momento, servidos con salsa tártara de la casa.',
    isRealPhoto: false,
    ingredients: ['Cebolla Dulce', 'Apanado Especial', 'Salsa Tártara']
  },
  {
    id: 'ribs-bbq-full',
    name: 'Costillas BBQ ahumadas (Full Rack)',
    category: 'ribs',
    price: 44900,
    description: 'Costillas de cerdo tiernas bañadas en nuestra icónica salsa BBQ artesanal, servidas con ensalada coleslaw y papas a la francesa.',
    isRealPhoto: false,
    isPopular: true,
    badge: '⭐ RECOMENDACIÓN DEL CHEF',
    ingredients: ['Costilla de Cerdo 500g', 'Salsa BBQ de la Casa', 'Papas a la Francesa', 'Coleslaw']
  },
  {
    id: 'wine-santa-ines-real',
    name: 'Vino Santa Inés en Balde Helado',
    category: 'drinks',
    price: 65000,
    description: 'Botella de vino Santa Inés servida en balde acrílico con abundante hielo y copas de cristal para disfrutar en el local.',
    image: '/images/restaurant/wine_drinks_bar.jpg',
    isRealPhoto: true,
    badge: '📸 FOTO REAL DEL LOCAL',
    ingredients: ['Vino Santa Inés 750ml', 'Servicio de Hielo & Copas']
  },
  {
    id: 'drink-beer-bucket',
    name: 'Balde de Cervezas Nacionales (6 unidades)',
    category: 'drinks',
    price: 27000,
    description: '6 cervezas bien heladas servidas en balde con hielo (Corona, Club Colombia, Águila o Poker).',
    isRealPhoto: false,
    isPopular: true,
    ingredients: ['6 Cervezas a Elección', 'Balde de Hielo']
  },
  {
    id: 'drink-soda-craft',
    name: 'Limonada de la Casa / Sodas Saborizadas',
    category: 'drinks',
    price: 7500,
    description: 'Refrescante limonada natural, cerezada o sodas de frutos rojos / maracuyá.',
    isRealPhoto: false,
    ingredients: ['Fruta Natural', 'Hielo', 'Soda']
  }
];

export const RESTAURANT_INFO = {
  name: "The Wing's House",
  tagline: "BURGER · RIBS · BEER",
  phone: "+57 300 000 0000",
  whatsappFormatted: "573000000000",
  address: "La Floresta / La América, Medellín, Colombia",
  schedule: "Lunes a Domingo: 4:00 PM - 11:30 PM",
  facebookUrl: "https://www.facebook.com/thewingshousebar/?locale2=es_LA&_rdr",
  googleMapsUrl: "https://maps.app.goo.gl/37vfrYxTMzETue7EA"
};
