const elementsFood = [
  {
    name:'Ceviche de pescado',
    price:'28',
    description:'El Ceviche peruano es la entrada predilecta del Perú. Su sencillo encanto se crea a partir de una especial combinación de ingredientes que se complementan perfectamente dando una explosión de sabores en el paladar.',
    image:'https://www.todoenperu.net/platos-tipicos/wp-content/uploads/2019/04/ceviche-1024x683.jpg',
    start:'5',
    url:'https://sibarita.pe/blog/conoce-el-origen-del-ceviche/'
  },
  {
    name:'Lomo saltado',
    price:'32',
    description:'dsadasdasdasdaEl Lomo Saltado es un plato típico de la gastronomía del Perú cuyos registros datan de fines del siglo XIX, donde se le conocía como lomito de vaca,s',
    image:'https://assets.afcdn.com/recipe/20210416/119490_w1024h768c1cx363cy240.webp',
    start:'5',
    url:'https://www.ilcb.edu.pe/blog-detalle/el-lomo-saltado'
  },
  {
    name:'Papa a la huancaína',
    price:'15',
    description:'Existen múltiples versiones sobre el origen y nombre de este tradicional plato. Una de las más importantes se remonta al siglo XIX durante la construcción del Ferrocarril Central de Lima que tenía como destino la ciudad de Huancayo',
    image:'https://perudelights.com/wp-content/uploads/2013/07/papa-a-la-huancaina-lista-1024x768.jpg',
    start:'4',
    url:'https://www.peru.travel/es/masperu/papa-a-la-huancaina-orgullo-y-tradicion-de-la-cocina-peruana'
  },
  {
    name:'Ají de gallina',
    price:'14',
    description:'Fue alrededor del siglo XVI que el plato llegó al Perú, pero no como lo conocemos ahora. Los cocineros peruanos Reemplazaron todos los ingredientes dulces por, ají, pecanas, cebolla, ajos, trozos de pan y papas, dando nacimiento a lo que hoy conocemos',
    image:'https://www.comeperuano.pe/wp-content/uploads/2022/08/receta-de-aji-de-gallina-con-huevo-sancochado.jpg',
    start:'3',
    url:'https://www.peru.travel/pe/masperu/aji-de-gallina-conoce-la-historia-de-este-delicioso-platillo'
  },
  {
    name:'Arroz con pollo',
    price:'28',
    description:'La creatividad de los cocineros,la solución al reemplazar el pato por el pollo y la chicha de jora por la cerveza negra. Desde entonces su popularidad ha ido en crecimiento y hoy forma parte de todos los recetarios de comida peruana ',
    image:'https://i.ytimg.com/vi/H6lgxgEWIs8/maxresdefault.jpg',
    start:'4',
    url:'https://peru.info/es-pe/gastronomia/noticias/2/12/simple-y-delicioso--conoce-mas-sobre-la-historia-del-arroz-con-pollo'
  },
  {
    name:'Caldo de gallina',
    price:'16',
    description:'Desde inicios del siglo XIX. Este plato es mencionado en “Artículos, Poesías y Comedias” en su verso Costumbres. Ya para los años 50 este ganó popularidad y se vendía como un plato más de los menús criollos en mercados de La Victoria.',
    image:'https://comidasperuanas.net/wp-content/uploads/2015/11/Caldo-de-gallina.jpg',
    start:'4',
    url:'https://peru.info/es-pe/gastronomia/noticias/2/12/caldo-de-gallina--conoce-la-historia-de-este-plato-tradicional'
  },
  {
    name:'Pachamanca a la tierra',
    price:'35',
    description:'Pachamanca nace con los rituales de agradecimiento que realizaba el hombre andino a la tierra por las cosechas producidas. La pachamanca era una forma de rendir culto a las divinidades del mundo andino.',
    image:'https://libroderecetas.com/files/recetas/pachamanca.jpg',
    start:'4',
    url:'https://peru.info/es-pe/gastronomia/noticias/2/13/la-ancestral-y-milenaria-pachamanca-peruana#:~:text=La%20Pachamanca%20nace%20con%20los,que%20llamaban%20una%20buena%20cosecha.'

  },
  {
    name:'Aguadito',
    price:'18',
    description:'El Aguadito de Pollo nace en la época colonial. Cuando los españoles trajeron el arroz al Perú y nuestros antepasados comenzaron a inventar diversos platos a base de este cereal.',
    image:'https://recetascocinaperuana.com/wp-content/uploads/2022/09/aguadito-peruano.jpg',
    start:'3',
    url:'https://comidasperuanas.net/aguadito-de-pollo/#:~:text=El%20Aguadito%20de%20Pollo%20nace,Gallina%20que%20hasta%20ese%20entonces.'
  },  {
    name:'Estofado de pollo',
    price:'26',
    description:'Sus orígenes son europeos y con el paso del tiempo, pasó a las filas de la cocina fusión. Países como España e Italia son pioneros en la técnica de la “stuffa” o de estofar, que consiste en hervir a fuego lento carne o pollo con verduras en su propio jugo.',
    image:'https://d1uz88p17r663j.cloudfront.net/original/64bcc5482d3135740c31620a99d46e52_Estofado_de_pollo_2.jpg',
    start:'5',
    url:'https://peru.info/es-pe/gastronomia/noticias/2/12/conoce-la-historia-detras-del-riquisimo-estofado-de-pollo'
  },
  {
    name:'Leche de tigre',
    price:'10',
    description:'La leche de tigre es la salsa que da vida al ceviche peruano, consumido a menudo como bebida reconstituyente, pero la leche de tigre se ha convertido en un aderezo de intenso sabor y refrescante, y también de una bebida que se sirve como aperitivo o tentempié.',
    image:'https://hips.hearstapps.com/es.h-cdn.co/hares/images/cultura/viajes-planes/leche-tigre-restaurantes-peruanos-espana-madrid-barcelona-receta-mejores/3817945-1-esl-ES/leche-de-tigre-el-gran-secreto-de-la-cocina-peruana.jpg',
    start:'5',
    url:'https://gastronomiaycia.republica.com/2013/06/18/que-es-la-leche-de-tigre/'
  },
  {
    name:'Cuy frito',
    price:'50',
    description:'Cuy Frito es típica del Perú, y hoy en día se considera una comida tradicional peruana. El cuy aporta muchos nutrientes y ácidos grasos importantes al organismo y contiene calcio, fósforo, hierro y zinc, esenciales en la nutrición humana.',
    image:'https://viajerocasual.com/wp-content/uploads/2021/05/comidas-tipicas-de-peru-cuy-chactado.jpg',
    start:'5',
    url:'https://comidasperuanas.net/cuy-frito/'
  },
  {
    name:'Menestrón',
    price:'17',
    description:'Se trata de una sopa de menestras acompañadas de una buena porción de carne de res, a la que se incorpora la misma salsa de los también famosos tallarines verdes.',
    image:'https://recetascocinaperuana.com/wp-content/uploads/2022/09/menestron-peruano.jpg',
    start:'4',
    url:'https://www.peruenvideos.com/origen-menestron-receta-gaston-acurio/'
  },
]