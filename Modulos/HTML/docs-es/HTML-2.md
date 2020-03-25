# Curso de HTML : Día 2

## Creación de entornos de desarrollo

- Aunque es viable escribir HTML directamente en los archivos correspondientes, guardar y recargar el navegador para ver los cambios, vamos a usar un módulo de Nodejs que nos ayudará a **crear un servidor web local** y **autoactualizar el navegador cuando cambiemos los archivos**
- El módulo que vamos a usar es  [BrowserSync](https://www.browsersync.io/)
- Para configurarlo, primero comprobamos que tenemos instalado Nodejs en nuestro equipo. Luego abrimos un terminal y vamos al directorio en el que vamos a trabajar. Por último, creamos el subdirectorio _www_ y ejecutamos:
    - `npm init -y`
    - `npm install browser-sync --save-dev`
  - Editamos el package.json y añadimos a la sección de scripts esta línea:
    `"start": "browser-sync start --server 'www' --files 'www'"`
  - Guardamos y ejecutamos `npm start`
- A partir de ese momento el navegador va a servir en la url http://localhost:3000/ el contenido que creemos dentro del subdirectorio _www_ creado anteriormente y  se actualizará automáticamente con los cambios que vayamos haciendo.

## Enlaces: Estructura de un sitio web e relación entre documentos HTML

- Un sitio web es un conjunto de documentos HTML tanto estáticos (existen físicamente en un disco), como dinámicos (los crea un programa con contenido de una base de datos).
- Los documentos HTML se relacionan entre sí mediante enlaces (links).
- Los enlaces están definidos por la etiqueta `<a>`.
- El atributo más importante es el `href` que determina qué página tiene que mostrar el navegador al hacer clic sobre él. En este ejemplo, el "contact.html" estaría en la misma carpeta que la página web existente.

`<a href="contact.html">contacto</a>`

  - Los links pueden ser internos: enlazan a otras partes del documento actual mediante el atributo _id_.
  - O pueden ser  links externos, que cargan otro documento nuevo.
- En el href se determina la ruta que tiene que cargar:
  - Si una ruta empieza por `/` es una ruta absoluta y por lo tanto empieza desde la raíz del sitio web.
  - Si no es así es relativa al sitio actual.
- Hay enlaces que navegan a páginas web en otros servidores. Es necesario usar el protocolo `http://`, luego el nombre de dominio, cualquier estructura de carpetas y luego el archivo.
`<a href="https://developer.mozilla.org/es/docs/Glossary/Tag">link a MDN</a>`
- Otro atributo importante relacionado con la accesibilidad es el `title`, que describe a dónde va a ir ese link.

## Listas

- Los tags `<ul>`y `<ol>`permiten crear listas desordenadas y ordenadas, respectivamente.

- Las listas desordenadas muestran cada elemento con un punto (bullet) y las ordenadas con un número.
  - Ejemplo de lista desordenada:

  ```html
  <ul>
    <li>Homer</li>
    <li>Marge</li>
    <li>Lisa</li>
    <li>Bart</li>
    <li>Maggie</li>
  </ul>
  ```

- Ejemplo de lista ordenada:

  ```html
  <ol>
    <li>Tokio</li>
    <li>Delhi</li>
    <li>Ciudad de México</li>
  </ol>
  ```

- Ambas listas permiten anidamiento, por ejemplo:

  ```html
  <ol>
    <li>
      Tokio
    </li>
    <li>
      Delhi
      <ul>
        <li>Apu</li>
        <li>Manjula</li>
      </ull>
    </li>
    <li>
      Ciudad de México
      <ul>
        <li>Bumblebee man</li>
      </ul>
    </li>
  </ol>
  ```

- Las listas de definición permiten asociar un término a una definición (de ahí el nombre). Tienen un uso bastante limitado.

- Se utiliza `<dl>`para iniciar al abrir la lista de definición, `<dt>`para especificar el término y `<dd>` para la definición:

  ```html
  <dl>
    <dt>Front-end</dt>
    <dd>Es una especialidad del desarrollo web, que trabaja la interfaz web y hace que el usuario pueda interactuar con ella.</dd>
    <dt>Back-end</dt>
    <dd>El backend es la parte del desarrollo web que se encarga de que toda la lógica de una página web funcione.</dd>
    <dt>Full-stack</dt>
    <dd>Programador con un perfil técnico muy completo que conoce bien tanto lo referente a back-end como lo referente a front-end</dd>
  </dl>
  ```
## Tablas

- Llamamos tabla a un conjunto estructurado en filas y columnas. Solamente sirven para mostrar contenido tabular.

- Se solían utilizar para maquetar como base de la parrilla, pero hoy en día eso se considera una muy mala práctica.

- Definimos un elemento tabla con el tag `<table>`,  que es un tag de bloque.

- Las tablas en HTML están compuestas por filas, marcadas con el tag `<tr>` (table row) que contienen celdas definidas polo tag `<td>` (table data). Por ejemplo, para hacer una tabla de 2x2:

  ```html
  <table>
    <tr>
      <td>Columna 1</td>
      <td>Columna 2</td>
    </tr>
    <tr>
      <td>Valor 1</td>
      <td>Valor 2</td>
    </tr>
  </table>
  ```
- Si queremos definir una celda de cabecera podemos cambiar su tag por `<th>`, que es una etiqueta semántica
  ```html
  <table>
    <tr>
      <th>Columna 1</th>
      <th>Columna 2</th>
    </tr>
    <tr>
      <td>Valor 1</td>
      <td>Valor 2</td>
    </tr>
  </table>
  ```

- Si queremos que una fila ou celda en concreto ocupe más de lo normal, podemos usar los atributos `_rowspan_`y `_colspan_`.
-Es importante mantener una estructura lógica para que la tabla no se muestre descolocada. Por ejemplo si queremos crear una tabla con 2 filas, pero que la primera fila solo tenga una celda y la segunda dos, haremos lo siguiente:

  ```html
  <table>
    <tr>
      <th colspan="2">Columna ancha</th>
    </tr>
    <tr>
      <td>Valor 1</td>
      <td>Valor 2</td>
    </tr>
  </table>
  ```

- Usamos el tag `<caption>` dentro de la tabla si queremos darle un título semántico a la tabla:

  ```html
  <table>
    <caption>
      Título de la tabla
    </caption>
    ...
  </table>
  ```

- También tenemos tags estructurales que definen semánticamente partes de una tabla:

  - `<thead>`: define las filas y celdas de encabezado.
  - `<tbody>`: define as filas y celdas principales de la tabla.
  - `<tfoot>`: define as filas y celdas de pie de tabla.

- Ejemplo completo:

  ```html
  <table border="1">
    <thead>
      <tr>
        <th>Temporada</th>
        <th>Goles</th>
        <th>Asistencias</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>2017-2018</th>
        <td>25</td>
        <td>43</td>
      </tr>
      <tr>
        <th>2018-2019</th>
        <td>40</td>
        <td>20</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">Datos ofrecidos por la LFP</td>
      </tr>
    </tfoot>
  </table>
  ```
