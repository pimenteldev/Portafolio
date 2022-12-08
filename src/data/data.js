export const data = [
  {
    id: 1,
    name: "ToDo",
    company: "FrontendMentor.io",
    logo: "/projects/todo.jpg",
    images: ["./projects/flag01.jpg", "./projects/flag.jpg"],
    languages: ["JAVASCRIPT", "HTML5", "REACT", "CSS3", "REDUX"],
    description:
      "Solución al reto de Programación de la web FrontendMentor.io. Se usó el localstorage para mantener las tareas generadas por la app(No Backend), Las tareas podian tener estatus normales, activas o completadas. Ademas se realizo el contexto para manejar el THEME de la app con la que se hace cambio Dark Mode y Light Mode",
    urlgithub: "https://github.com/pimenteldev/ToDo",
    url: "https://pimenteldevtodo.netlify.app/",
  },
  {
    id: 2,
    name: "Rock Paper Scissors",
    company: "FrontendMentor.io",
    logo: "/projects/rockpaperscissors.jpg",
    images: ["./projects/caney01.jpg", "./projects/caney2.jpg"],
    languages: ["JAVASCRIPT", "HTML5", "CSS3", "GAME"],
    description:
      "Solución al reto de Programación de la web FrontendMentor.io. Se usó el localstorage para mantener el SCORE del juego(No Backend), Diseño responsive trabajado con Mobile-first workflow, El juego posee una logica sencilla, Proximamente se aumentará el nivel añadiendo las opciones de Lizard, Spock.",
    urlgithub: "",
    url: "",
  },
  {
    id: 3,
    name: "Job Listings",
    company: "FrontendMentor.io",
    logo: "/projects/joblisting.jpg",
    images: ["./projects/caney01.jpg", "./projects/caney2.jpg"],
    languages: ["REACT", "HTML5", "CSS3", "JAVASCRIPT", "REDUX"],
    description:
      "Solución al reto de Programación de la web FrontendMentor.io. Este reto te enfrenta al manejo de una data en formato JSON la cual deberás presentar en un      diseño solicitado, se realizo con la metodología de  Mobile-first ya que el diseño debe adaptarse a los diferentes tamaños de pantalla de forma optima, se deben filtrar dinamicamente la data segun el Lenguaje, el Rol y el nivel requerido de cada solicitud.",
    urlgithub: "",
    url: "",
  },
  {
    id: 4,
    name: "Sistema El Caney",
    company: "Restaurante El Caney",
    logo: "./projects/caney.jpg",
    images: ["/projects/caney01.jpg", "./projects/caney2.jpg"],
    languages: ["JAVASCRIPT", "HTML5", "PHP", "CSS3", "SQL"],
    description:
      "Sistema interno que permite el control de inventario, ventas, proveedores y demás funciones requeridas por el cliente para su restaurante. Manejo de inventario, pedidos, reservas, comandas, reportes y todo lo que anteriormente se realizaba de forma manual.",
    urlgithub: "",
    url: "",
  },
  {
    id: 5,
    name: "Buscame En Guate",
    company: "BuscameEnGuate",
    logo: "./projects/guate.jpg",
    images: ["/projects/guate01.jpg", "./projects/guate2.jpg"],
    languages: ["JAVASCRIPT", "HTML5", "PHP", "CSS3", "SQL"],
    description:
      "Desarrollado del sitio web segun las especificaciones del cliente, previamente se usaba wordpress de una forma no adecuada por lo que se decidio crear el proyecto desde cero para cumplir con los requerimientos del cliente. Ademas se desarrollo una plataforma de gestion interna del Sitio web y una plataforma de Cupones Digitales.",
    urlgithub: "",
    url: "http://buscameenguate.com/",
  },
  {
    id: 6,
    name: "Sistema Merpre",
    company: "Mepre",
    logo: "/projects/merpre.jpg",
    images: ["./projects/merpre01.jpg", "./projects/merpre2.jpg"],
    languages: ["JAVASCRIPT", "HTML5", "PHP", "CSS3", "SQL", "ANDROID", "JAVA"],
    description:
      "Sistema Web de Gestión y control de Préstamos, Desarrollo de Aplicativo Android vinculado con cuentas de usuario para los trabajadores de la empresa que se comunica con el servidor vía webservices.(Rutinas de cobro, Registro de Clientes, Préstamos, Cierre de cajas, Geolocalización)",
    urlgithub: "",
    url: "https://mepre.com/",
  },
];

export const blogData = [
    {
      "id": 1,
      "title": "Promesas en JS",
      "description": "Promesas, Una alternativa para lidiar con el código Asíncrono.",
      "date": "Octubre 16, 2022",
      "categories": ["JAVASCRIPT"],
      "body": `
              <p>En Javascript la ejecución de un código se realiza de arriba hacia abajo 
                y en orden consecutivo, esto quiere decir que se ejecuta linea por linea.
              Un ejemplo claro de esto es:</p>

<code>
  <pre>
    
    const saludar = (nombre) => {
      console.log("Hola " + nombre);
    }

    saludar("Roy")
    saludar("José")

    /*
    * Salida:
    * Hola Roy
    * Hola José
    */
  
  </pre>
</code>
              <p>
                Este código nos regresa por consola un saludo a Roy y José en ese orden,
                debido a que lo estamos llamando asi con las funciones. Este es su comportamiento por defecto de Javascript.
              </p>

              <hr />
              <h3>¿Qué es una Operación asíncrona?</h3>
              <p>
                Al ser Javascript un lenguaje de un solo hilo, esto hace que solo puede ejecutar una tarea a la vez y lo hace síncrono, Ahora una operación asíncrona se refiere a cuando se puede realizar al mismo tiempo que otros eventos sin afectar el flujo principal de la aplicación; Entonces cuando necesitamos un ejemplo para demostrar esto podemos pensar cuando una operación ejecuta una llamada a una API, esta llamada demora un tiempo en devolver una respuesta y mientras esto sucede el sistema no debe paralizarse.
              </p>
        
              <hr />
              <h3>Entonces, ¿Que es una promesa?</h3>
              <blockquote class="quote">Una promesa es un objeto que representa una operación asíncrona que puede resolverse ahora, en un futuro o nunca.</blockquote>
              <br />

              <h3>Estados de una promesa</h3>
                <p>Una promesa puede tener 3 estados:</p>
                <ul>
                  <li>fulfill: Significa que una promesa fue cumplida</li>
                  <li>reject: Quiere decir que la promesa no fue cumplida</li>
                  <li>pending: Este sería el estado inicial de la promesa, esta se mantendra mientras no se cumpla el tiempo estipulado de espera de la misma.</li>
                </ul>

                <h3>Manipulación de promesas</h3>
                <p>Cuando hablamos de promesas se pueden usar o manipular de la siguiente forma:</p>

                <ul>
                  <li>Creación de una promesa</li>
                  <li>Consumir una promesa</li>
                </ul>
                <br />
                <h3>Creación de una promesa:</h3>
                <p>Para esto debemos usar el objeto Promise de la siguiente manera.</p>

<code>
  <pre>
    const promesa = new Promise((resolve, reject)=>{
      let esVerdadera = true
      if(esVerdadera){
        setTimeout(()=>{
          resolve("Promesa Cumplida")
        }, 4000)
      }else{
        reject("Promesa Rechazada")
      }
    });
  </pre> 
</code>

                <p>Este código muestra como una promesa recibe 2 funciones como parámetros, <stron>resolve</stron> que se ejecutará cuando la promesa se cumpla y por el otro lado <stron>reject</stron> que lo hará cuando la promesa no se cumpla.</p>
                <br />
                <h3>Consumir una promesa:</h3>
                <p>En este caso necesitamos entender que las promesas tienen 3 métodos indispensables para su consumo:</p>
                <br />
                <ol>
                  <li><strong>then()</strong> : se encarga de evaluar cuando la promesa se cumpla</li>
                  <li><strong>catch()</strong> : esta atrapará los errores cuando la promesa falle</li>
                  <li><strong>finally()</strong> : se ejecutará siempre, independiente de si la promesa se cumplió o no</li>
                </ol>
                <br />  
                <p>Para consumir la promesa del ejemplo pasado haríamos lo siguiente:</p>
<code>
  <pre>
    promise
      .then((respuesta)=> console.log(respuesta))
      .catch((error)=> console.log(error))
  </pre>  
</code>

                <p>De esta forma recibiremos el mensaje de "Promesa Cumplida cuando el método <strong>.then()</strong> se ejecute o en caso de error un mensaje por consola con el error que se presentó.</p>`,
      "image": "/post01.jpg",
    },
]