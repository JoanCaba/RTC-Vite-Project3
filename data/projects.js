/*
const PROJECTS = {
  en: [
    {
      title: 'test2en',
      shortName: 'T2',
      projectImage: 'URLTEST2',
      projectAlt: 'ALTOFIMAGE',
      url: 'URLTEST2en',
      codeUrl: 'CODEURLTEST2en',
      description: 'thos is description of test2en',
      technologies: ['ViteJS'],
      defaultProject: true,
      showProject: true
    },
    {
      title: 'test44en',
      shortName: 'T4',
      url: 'URLTEST3en',
      codeUrl: 'CODEURLTEST4444en',
      description: 'thos is description of test44en',
      technologies: ['React', 'Vite'],
      defaultProject: false,
      showProject: true
    }
  ],

  /* ,
  {
    title: '',
    url:
    codeUrl:
    description:
    technologies:
    defaultProject:
  },
  {
    title: '',
    url:
    codeUrl:
    description:
    technologies:
    defaultProject:
  },
  {
    title: '',
    url:
    codeUrl:
    description:
    technologies:
    defaultProject:
  }

  es: [
    {
      title: 'test2es',
      shortName: 'T2',
      url: 'URLTEST2es',
      codeUrl: 'CODEURLTEST2es',
      description: 'thos is description of test2es',
      technologies: ['ViteJS'],
      defaultProject: true,
      showProject: true
    },
    {
      title: 'test44es',
      shortName: 'T4',
      url: 'URLTEST3es',
      codeUrl: 'CODEURLTEST4444es',
      description: 'thos is description of test44es',
      technologies: ['React', 'Vite'],
      defaultProject: false,
      showProject: true
    }
  ]
};
*/

const PROJECTS = {
  en: [
    {
      title: 'E-comm',
      shortName: 'EC',
      projectImage: '/Projects/eCommerce.png',
      projectImageAlt: 'Screenshot of the e-commerce website',
      url: 'https://example.com/e-commerce',
      codeUrl: 'https://github.com/username/e-commerce',
      description:
        'A fully functional e-commerce website built using the MERN stack. Users can browse products, add them to the cart, and complete the checkout process. Admins have access to manage products, inventory, and orders.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      defaultProject: true,
      showProject: true
    },
    {
      title: 'T-Manager',
      shortName: 'TM',
      projectImage: '/Projects/task-manager.jpg',
      projectImageAlt: 'Screenshot of the task management app',
      url: 'https://example.com/task-management',
      codeUrl: 'https://github.com/username/task-management',
      description:
        'A web-based application for managing tasks and projects. Users can create, update, and delete tasks, assign deadlines, and track progress. Features include task filtering, user roles, and email notifications.',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      defaultProject: false,
      showProject: true
    },
    {
      title: 'Weather',
      shortName: 'WF',
      projectImage: '/Projects/weather.jfif',
      projectImageAlt: 'Screenshot of the weather forecast app',
      url: 'https://example.com/weather-forecast',
      codeUrl: 'https://github.com/username/weather-forecast',
      description:
        "A mobile app that provides weather forecasts based on the user's location. It fetches weather data from a third-party API and displays information such as temperature, humidity, and wind speed. Users can save favorite locations.",
      technologies: ['React Native', 'Expo', 'REST API'],
      defaultProject: false,
      showProject: true
    },
    {
      title: 'Blog',
      shortName: 'BP',
      projectImage: '/Projects/Blogger.jfif',
      projectImageAlt: 'Screenshot of the blogging platform',
      url: 'https://example.com/blogging-platform',
      codeUrl: 'https://github.com/username/blogging-platform',
      description:
        'A blogging platform that allows users to create and publish blog posts. It includes features like user authentication, comments, and tagging. Admins can manage posts, users, and moderate comments.',
      technologies: ['Django', 'Python', 'PostgreSQL'],
      defaultProject: false,
      showProject: true
    },
    {
      title: 'Recipe',
      shortName: 'RA',
      projectImage: '/Projects/Recipe.jfif',
      projectImageAlt: 'Screenshot of the recipe app',
      url: 'https://example.com/recipe-app',
      codeUrl: 'https://github.com/username/recipe-app',
      description:
        'A mobile app that provides a collection of recipes categorized by cuisine and dietary preferences. Users can search for recipes, save favorites, and create personalized recipe collections. It also includes a meal planner feature.',
      technologies: ['React Native', 'Firebase', 'Firestore'],
      defaultProject: false,
      showProject: true
    }
  ],
  es: [
    {
      title: 'E-comm',
      shortName: 'EC',
      projectImage: '/Projects/eCommerce.png',
      projectImageAlt: 'Screenshot of the e-commerce website',
      url: 'https://example.com/e-commerce',
      codeUrl: 'https://github.com/username/e-commerce',
      description:
        'Un sitio web de comercio electrónico completamente funcional creado con la pila MERN. Los usuarios pueden buscar productos, agregarlos al carrito y completar el proceso de pago. Los administradores tienen acceso para gestionar productos, inventario y pedidos.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      defaultProject: true,
      showProject: true
    },
    {
      title: 'T-Manager',
      shortName: 'TM',
      projectImage: '/Projects/task-manager.jpg',
      projectImageAlt: 'Screenshot of the task management app',
      url: 'https://example.com/task-management',
      codeUrl: 'https://github.com/username/task-management',
      description:
        'Una aplicación basada en la web para la gestión de tareas y proyectos. Los usuarios pueden crear, actualizar y eliminar tareas, asignar plazos y realizar un seguimiento del progreso. Las funciones incluyen filtrado de tareas, funciones de usuario y notificaciones por correo electrónico.',
      technologies: ['Vue.js', 'Laravel', 'MySQL'],
      defaultProject: false,
      showProject: true
    },
    {
      title: 'Weather',
      shortName: 'WF',
      projectImage: '/Projects/weather.jfif',
      projectImageAlt: 'Screenshot of the weather forecast app',
      url: 'https://example.com/weather-forecast',
      codeUrl: 'https://github.com/username/weather-forecast',
      description:
        'Una aplicación móvil que proporciona pronósticos meteorológicos basados ​​en la ubicación del usuario. Obtiene datos meteorológicos de una API de terceros y muestra información como la temperatura, la humedad y la velocidad del viento. Los usuarios pueden guardar sus ubicaciones favoritas',
      technologies: ['React Native', 'Expo', 'REST API'],
      defaultProject: false,
      showProject: true
    },
    {
      title: 'Blog',
      shortName: 'BP',
      projectImage: '/Projects/Blogger.jfif',
      projectImageAlt: 'Screenshot of the blogging platform',
      url: 'https://example.com/blogging-platform',
      codeUrl: 'https://github.com/username/blogging-platform',
      description:
        'Una plataforma de blogs que permite a los usuarios crear y publicar entradas de blog. Incluye características como autenticación de usuario, comentarios y etiquetado. Los administradores pueden administrar publicaciones, usuarios y comentarios moderados.',
      technologies: ['Django', 'Python', 'PostgreSQL'],
      defaultProject: false,
      showProject: true
    },
    {
      title: 'Recipe',
      shortName: 'RA',
      projectImage: '/Projects/Recipe.jfif',
      projectImageAlt: 'Screenshot of the recipe app',
      url: 'https://example.com/recipe-app',
      codeUrl: 'https://github.com/username/recipe-app',
      description:
        'Una aplicación móvil que proporciona una colección de recetas clasificadas por cocina y preferencias dietéticas. Los usuarios pueden buscar recetas, guardar favoritos y crear colecciones de recetas personalizadas. También incluye una función de planificador de comidas.',
      technologies: ['React Native', 'Firebase', 'Firestore'],
      defaultProject: false,
      showProject: true
    }
  ]
};

export default PROJECTS;
