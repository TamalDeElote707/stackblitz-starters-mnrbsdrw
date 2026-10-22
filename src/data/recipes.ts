export interface Recipe {
  id: string;
  nombre: string;
  emoji: string;
  tiempo: string;
  porciones: string;
  descripcion: string;
  foto: string;
  ingredientes: string[];
  pasos: string[];
}

export const recipes: Recipe[] = [
  {
    id: 'hotcakes-platano',
    nombre: 'Hotcakes veganos de plátano',
    emoji: '🥞',
    tiempo: '20 min',
    porciones: '2 porciones',
    descripcion: 'Esponjositos, sin huevo ni lácteos y con fruta.',
    foto: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80',
    ingredientes: [
      '1 plátano maduro',
      '1 taza de avena molida',
      '1 taza de leche de almendra',
      '1 cucharadita de polvo para hornear',
      '1 cucharadita de vainilla',
      '1 pizca de sal',
      '1 cucharadita de aceite de coco',
      'Fresas y frambuesas para decorar',
      'Miel de agave al gusto',
    ],
    pasos: [
      'Machaca el plátano con un tenedor hasta que quede como puré.',
      'Agrega la leche de almendra y la vainilla, y mezcla bien.',
      'Añade la avena, el polvo para hornear y la sal. Revuelve hasta tener una masa suave.',
      'Deja reposar la masa 5 minutos para que espese.',
      'Calienta una sartén con un poquito de aceite de coco a fuego medio-bajo.',
      'Vierte porciones de masa y cocina 2-3 minutos por lado, hasta que doren.',
      'Sirve con fresas, frambuesas y un chorrito de miel de agave. ¡A disfrutar!',
    ],
  },
  {
    id: 'bowl-betabel',
    nombre: 'Bowl rosa de hummus de betabel',
    emoji: '🥗',
    tiempo: '30 min',
    porciones: '2 porciones',
    descripcion:
      'Un bowl colorido con hummus rosita, verduras crujientes y aguacate.',
    foto: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80',
    ingredientes: [
      '1 taza de arroz integral cocido',
      '1 lata de garbanzos cocidos',
      '1 betabel cocido',
      '2 cucharadas de tahini',
      'Jugo de 1 limón',
      '1 diente de ajo',
      '1 pepino en rodajas',
      '1 zanahoria rallada',
      '4 rábanos en rodajas finas',
      '1 aguacate',
      'Sal, pimienta y aceite de oliva',
      'Semillas de ajonjolí para decorar',
    ],
    pasos: [
      'Licúa la mitad de los garbanzos con el betabel, el tahini, el limón, el ajo y un poco de agua hasta obtener un hummus rosita.',
      'Sazona el hummus con sal, pimienta y un chorrito de aceite de oliva.',
      'Saltea los garbanzos restantes en una sartén con sal y pimienta hasta que estén doraditos.',
      'Coloca el arroz en el fondo de un bowl.',
      'Agrega una cucharada generosa de hummus de betabel.',
      'Acomoda el pepino, la zanahoria, los rábanos, el aguacate y los garbanzos crujientes.',
      'Termina con ajonjolí y un poco de limón. ¡Listo!',
    ],
  },
];
