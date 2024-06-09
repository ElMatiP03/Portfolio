//https://postimg.cc/gallery/HM3M7WK/65d0e61b
const ProjectsData = [
  {
    id: "clonMercadoLibre",
    nombre: "Clon Mercado Libre",
    imagen:
      "https://lh3.googleusercontent.com/pw/AMWts8CCAwzn3qln-XSXW2IxffsGyY76ym2Gnu3oNMIgqB9no0DI-zapn1ECAfWI9BnTdShRix6A54AAi2hApzXB5DBOOhNq__PreON3F-LI1HTwXh_zDuimkKdpQuqbkbX4m2Julq0h8YHh9SRPWLBDjBM5=w800-h400-no?authuser=0",
    categoria: "Desarrollo WEB",
    tipo: "Personal",
    fecha: "Marzo 2022",
    autor: "Sergio Demarco",
    descripcion:
      "A comienzos del año 2022 cree este <b>proyecto React</b> para demostrar mis habilidades y conseguir mi primer trabajo como desarrollador web. La página es un clon de MercadoLibre, con listado de artículos cargados, <b>carrito de compras</b> y favoritos.",
    tecnologias: ["react", "tailwind", "javascript", "github"],
    link: "https://demarcosergio.github.io/mercadoLibreClon/",
    boton: "Visitar Web",
  },
  {
    id: "sudakaMu",
    nombre: "Servidor Mu Online",
    imagen:
      "https://lh3.googleusercontent.com/pw/AMWts8DhIAz-ka3txFV-RjBKXDRlJpqSAbRKQ1MOpl_23FOV3t1qsl_fv19pcLC6kzO-klComWDC9c5gpCK0zGRzzYi402Of2T1ACLrGCeO3ALxhxtxk1OKMW9Z-susocQra1mKTPi9-AhQTYzqCv9954R_G=w800-h400-no?authuser=0",
    categoria: "Desarrollo Videojuegos",
    tipo: "Emprendimiento",
    fecha: "Julio 2022",
    autor: "Sergio Demarco",
    descripcion:
      "SudakaMu es un servidor del videojuego MuOnline. Me encargué de configurar armas, modelos 3d, estadísticas de personajes y bases de datos para poder <b>crear el servidor</b> y alojarlo en un hosting privado. También diseñé logo y banners publicitarios. En su pico de rendimiento alojó más de <b>100 personas online</b>.",
    tecnologias: ["sql", "cplus", "github", "photoshop"],
    link: "https://drive.google.com/drive/u/0/folders/16kn64EMsMIkvcOpbJabR3ohsOM-9ag4-",
    boton: "Ver imágenes",
  },
  {
    id: "estrellaWeb",
    nombre: "Estrella de Boedo Web",
    imagen:
      "https://lh3.googleusercontent.com/pw/AMWts8C2JZlR-8VNZQOmPkZiy-OAlx-dw32gTwwpP-Fq-5Ecd1pM05EP-7l9MCOK6st4V0hZQdg3UzwK9oqn5ciesMkNVIYH3dizOoDdeWdgiICHmnVAQY-sZSvOP7h-FL9Gl_sMqVjNigmk3CCmaL9SmIJJ=w800-h400-no?authuser=0",
    categoria: "Desarrollo WEB",
    tipo: "Facultad",
    fecha: "Septiembre 2022",
    autor: "Sergio Demarco",
    descripcion:
      "Final de materia: Diseño de interfaces de la Escuela Da Vinci (Técnico Superior en Diseño y Programación Web). El objetivo de la materia fue <b>diseñar</b> una página web para una entidad a elección y adaptar los diseños de ordenador a <b>mobile</b>. ",
    tecnologias: ["photoshop", "html", "css"],
    link: "https://drive.google.com/drive/u/0/folders/1KHuWkGnMIju9ZFayw1kqHPxzZf9idOI3",
    boton: "Ver imágenes",
  },
  {
    id: "pastillasWeb",
    nombre: "Pastillas del Abuelo Web",
    imagen:
      "https://lh3.googleusercontent.com/pw/AMWts8Djm6S9iNGqAJG2PbgpRM0en3Uxs_nwMgbr-oc3qHLG8wvzyUvQNDopriJ6CEKG-whnVLYHfqQ9MTZjEJ8TVVdFcDknNmUWWeOj7Ocx6fZHndKK4XG4KGIQC9NSWMNdwfrjsdbB7vno-dUJikZI0-eV=w800-h400-no?authuser=0",
    categoria: "Desarrollo Web",
    tipo: "Facultad",
    fecha: "Diciembre 2022",
    autor: "Sergio Demarco",
    descripcion:
      "Final de materia: Maquetado Web de la Escuela Da Vinci (Técnico Superior en Diseño y Programación Web). El objetivo de la materia fue diseñar y <b>maquetar</b> una página web para nuestra banda musical favorita.",
    tecnologias: ["html", "css", "photoshop"],
    link: "",
    boton: "Visitar Web",
  },
  {
    id: "comunicacionVisual",
    nombre: "Síntesis Gráfica: Boedo",
    imagen:
      "https://lh3.googleusercontent.com/pw/AMWts8BFlKtDTDwXN-3G_EQVBS20lBbGun2jWGM3-vVz1IHaKzQ2pmzwOmTt1CO2oqsimiJxMROWl_gAegOhwBquVWxhOVhu_medRvtn0P7qSSZrUGPCvn5LnixEvcDwtCRWQ8MouKwAPzIhKFUoO61_PgvM=w800-h400-no?authuser=0",
    categoria: "Desarrollo Web",
    tipo: "Facultad",
    fecha: "Julio 2022",
    autor: "Sergio Demarco",
    descripcion:
      "Final de materia: Comunicación Visual de la Escuela Da Vinci (Técnico Superior en Diseño y Programación Web). El objetivo de la materia fue <b>diseñar</b> y maquetar una página web informativa sobre una localidad.",
    tecnologias: ["react", "tailwind", "javascript", "github"],
    link: "https://drive.google.com/drive/u/0/folders/1lYorxGG5MDEkJZDXkem7HcnA4E23FAYM",
    boton: "Ver Imágenes",
  },
  {
    id: "lolazo",
    nombre: "LOL trainer",
    imagen:
      "https://lh3.googleusercontent.com/pw/AMWts8CFjQAa8OY4AFGHbbWdxg2qp9nuqDo-Jvjxvm7_A1fOYjwn9OgvktwsUPRIfzx9JC_ovBzAINr6tbPrmMe65qAnyKIvF6OFXmhizeizP-FEPtbXIxl6ecH_gZ0XCgX1YD-3GFXfIxsHTGBpbeCQWfUv=w800-h400-no?authuser=0",
    categoria: "Desarrollo Web",
    tipo: "Emprendimiento",
    fecha: "Julio 2022",
    autor: "Sergio Demarco",
    descripcion:
      "Lol Trainer es una página web que sirve como asistencia a los jugadores de <b>League of Legends</b>. Se conecta a la base de datos de Riot mediante una API REST y ofrece a los usuarios información de sus partidas en <b>tiempo real</b>. La página se encuentra subida como una versión preliminar a la espera de actualizaciones.",
    tecnologias: ["react", "tailwind", "javascript", "github"],
    link: "",
    boton: "Ver Imágenes",
  },
  {
    id: "impresiones3D",
    nombre: "Impresiones 3D",
    imagen:
      "https://lh3.googleusercontent.com/pw/AMWts8BL7bZT3tFxkGeOUlbnXfslyK2PCF0Q5q2HtrbW7qXUfnQIe8DvnRLvT2x8FDQULV3t2ZRHY8hxo8jA0iWe7YOSK7qXas5TLfrT2WU0avliWwUTgZMKU2x13kBLaVDxRp7uyJ4he9uELJtRVlz4D68_=w800-h400-no?authuser=0",
    categoria: "Impresión 3D",
    tipo: "Personal",
    fecha: "Marzo 2022",
    autor: "Sergio Demarco",
    descripcion:
      "En el año 2020 estuve incursionando en el mundo de las <b>impresiones 3D</b>. Aprendí a utilizar herramientas de modelado 3D como AutoCAD y Autodesk Maya. Hice varias figuras de League of Legends y escudos de clubes de fútbol entre otras cosas.",
    tecnologias: ["autocad"],
    link: "",
    boton: "Ver Imágenes",
  },
  {
    id: "duelixFifa",
    nombre: "DuelixGames: FIFA",
    imagen:
      "https://lh3.googleusercontent.com/pw/AMWts8AEujNNZTt0u2-vxrKMJQ_khC7rPZleM9ES_cbHPLqAMxfQSmMb-1wPaJRcYfozQvRTvIbqFkUAJM-nYTnzpRHyZkHNfPoXEqdRONEwaJYnUNGL0dEBIvO9adIq9YF82U3zPaX0ti2Hsmn1zih2RR0q=w800-h400-no?authuser=0",
    categoria: "Community Manager",
    tipo: "Emprendimiento",
    fecha: "Diciembre 2022",
    autor: "Sergio Demarco",
    descripcion:
      "DuelixGames es una cuenta de Instagram y Facebook dedicada a la comunidad de jugadores del videojuego de fútbol FIFA. En la cual se organizaban <b>torneos online</b>. Mediante noticias, memes y juegos la cuenta alcanzó los 5mil seguidores en su pico de rendimiento. ",
    tecnologias: ["photoshop"],
    link: "https://drive.google.com/drive/u/0/folders/1XiVEf5xZjnidJNO3MaGiOKchYM4KSPZ4",
    boton: "Ver Imágenes",
  },
];

export default ProjectsData;
