# Curso de HTML y CSS

## Día 1

- Introdución al HTML
- Anatomía de un tag
- Estructura básica de un documento HTML

### Introdución al HTML

- **HTML (HyperText Markup Language)** describe semánticamente la estructura de una página web mediante elementos compuestos por etiquetas. Es decir, formatea y estructura diferentes documentos para que estos puedan leerse en cualquier navegador.

- Es el lenguaje propio del protocolo HTTP; sistema de intercambio de información para investigadores, desarrollado por Berners-Lee en el CERN a principios de los 90.
- El éxito de este lenguaje residió en que resultaba sencillo de manejar y aprender. Además al ser de código abierto permitía a los usuarios a adaptarlo fácilmente a sus necesidades.
- El http funcionaba como un sistema servidor-cliente. Con el tiempo, los servidores fueron modificados y los clientes pasaron a ser los que hoy conocemos como navegadores (Mosaic, que permitió mostrar imágenes por primera vez gracias al tag `<img>`; luego Netscape, hasta llegar a Mozilla y su navegador Firefox…).
- Con el tiempo y los múltiples cambios introducidos, resultó necesaria la creación de un organismo que estandarizase el uso del lenguaje HTML. Así nació el W3C, Consorcio World Wide Web, que es la comunidad encargada de desarrollar y fijar las especificaciones técnicas y directrices que dan forma a la norma ISO de SGML (Standard Generalized Markup Language) para garantizar la calidad técnica y editorial.
- En el año 1995 salió la versión 2.0 de HTML, en 1997 la 3.2, pero no fue hasta 1998 cuando se creó una gran versión de HTML, la 4.
- De la mano de HTML 4,  aparece la primera versión de CSS con la que se comienzan a diferenciar dos conceptos clave: presentación(CSS) y contenido(HTML).
- A principios de los 2000, nace el XHTML gracias a la acción del W3C.  El lenguaje se acercaba más al XML.
- A mediados de los 2000 la tecnología AJAX aporta dinamismo a la web y abre un abanico de posibilidades más allá de la muestra de contenido estático. La web ahora sirve como soporte para mucho más.
- A finales de los 2000 se populariza Flash y otros softwares cerrados y aplicaciones que suplían las carencias que comenzaba a presentar el XHTML. Con ellos se disparó el consumo de material multimedia (hasta entonces soportado gracias applets de Java o RealPlayer) y la web se convirtió en una plataforma de contenidos indispensable.

- En medio de este contexto, la W3C comienza a desarrollar la quinta versión de HTML, HTML5, con la que se fijaron los estándares de una plataforma más abierta y autosuficiente, que soportaba audio, vídeo, permitía mejor acceso a los geolocalizadores, etiquetas semánticas, 3d…
- El hecho de que Apple dejase de soportar Flash en sus Iphone, supuso el golpe definitivo para esta tecnología y el triunfo total del HTML5.
- Hoy en día tenemos acceso a la web desde muchos más dispositivos, además de presentarse de otra forma gracias al internet de las cosas, que terminará por moldear el futuro próximo del HTML.
- Una de las mejores fuentes para consultar información sobre HTML es [MDN](https://developer.mozilla.org/). Google, Microsoft y Apple contribuyen a nutrirla.


### Anatomía de un tag

- El lenguaje HTML se compone de varios elementos con los que se pueden construir páginas web. Por ejmeplo: textos, imágenes, tablas y elementos de formulario.
- Las etiquetas, **tags**, se utilizan para definir la extesión, estructura y orden de cada uno de los elementos que componen la página web.
- Un tag se abre con el signo ‘menor que’ (<) y se cierra con el ‘mayor que’ (>).
- Tradicionalmente se recomienda su escritura en minúsculas, aunque en **HTML5** ya no se diferencia entre minúsculas y mayúsculas. En minúsculas, el código es más legible y hace más fácil para la mayoría de los desarrolladores detectar errores en el código.
- Los tags suelen funcionar por pares: un tag de inicio y un tag de cierre que indica el fin del elemento o secuencia que contenga. hay tags como el de imagen y algunos elementos de  formulario no necesitan cierre.
- El contenido entre la apertura y el cierre puede ser texto u otros tags.
- Los tags pueden contener atributos. Los atributos son valores adicionales que configuran los elementos o ajustan su comportamiento. Por ejemplo: `_lang_`para especificar el idioma del documento.
- Los tags se van anidando unos dentro de otros. Así se crea la estructura que da forma a los documentos HTML.

Exemplos:

`<p lang="lat">Lorem ipsum dolor sit amet consectetur adipisicing.</p>`

`<img src="foto.jpg" alt="Texto descriptivo da foto" />`

```html
<section>
    <header>
        <h2>Título más importante de la sección</h2>
    </header>
    <p>Lorem ipsum dolor sit amet.</p>
</section>
```

### Estructura básica de un documento HTML

- Para definir un documento HTML debemos utilizar el tag `<html>...</html>`. Esto indica que para estructurar todo lo contenido entre esas etiquetas se utiliza el lenguaje html, lo que refiere a una **estructura semántico del contenido.**
-En cada página web HTML, la primera línea de código siempre debe ser la declaración `<! DOCTYPE html>` .
- La etiqueta Doctype **no es un elemento HTML en sí**, sino una etiqueta específica para los navegadores para identificar el tipo de código en el documento.
- El tag que
- Un documento HTML está formado por dos partes principales: `head` y `body`.
- El *head* es la parte de código html que no se muestra en la página web en sí misma.
- Está la metainformación que ayuda al navegador a decidir cómo mostrar el contenido. Contiene información como: el **título de la página web* (que se muestra en la pestaña del navegador) o **enlaces a recursos externos** (como a el documento CSS que puede contener los estilos utilizados en la página).
- El `body` es todo lo que sí se muestra en la pantalla del usuario. La **parte visible de la web**.
- El documento HTML solo representa contenido, la presentación corre a cargo del CSS.

###  Documento HTML, paso a paso

- Como hemos mencionado, todos los documentos HTML deben comenzar por el doctype, que determina el tipo de documento: `<!DOCTYPE html>`
- Puede ser que aparezca un doctype más complejo, fruto de las anteriores versiones de html:

  ```html
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  ```

####  Html

- A continuación, abrimos el `<html>`, dentro del que se distinguirán dos tags principales: `<head>`, con la metainformación de la web y `<body>`, dentro del que se estructura la parte visible. Ese primer tag html suele ir acompañado del atributo _lang_, que define el idioma de la web. Por ejemplo:

  ```html
  <html lang="es"></html>
  ```
#### El head

- Toda la metainformación del documento html está incluida dentro de `<head>`------`</head>`: el título de la web, la descripción, la carga del código externo (por ejemplo, CSS) y diferentes tags `<meta>` que se utilizan para definir varios valores de metainformación. Por ejemplo, el `<meta charset="utf-8" />` permite visualizar los caracteres de cualquier idioma. 

  ```html
  <!DOCTYPE html>
  <html lang="es">
    <head>
      <meta charset="utf-8" />
      <title>Chiquito for president</title>
      <meta
       name="description"
        content="Recaudación para resucitar a Chiquito y hacerlo presidente"
      />
    </head>
    <body>
      Contenido de la página
    </body>
  </html>
  ```
#### El body e los elementos estructurales que contiene

- El `<body>`es la parte que dice al navegador cómo mostrar los contenidos, la jerarquía de los contenidos de la página (ojo, no el estilo).
- HTML5 aporta estructura semántica al documento de forma sencilla. o lo que es lo mismo: cada tag aporta un significado estructural a los elementos de la página (con excepción de `<div>`y `<span>`, como veremos más abajo).
- Para Google es mucho más fácil procesar los datos de nuestra página si se estructura con etiquetas semánticas. Así, aparecerá mejor posicionada a la hora de que el buscador indexe los resultados de búsqueda.

##### Titulares

- Una página web puede tener hasta 6 niveles de títulos, que definen una estructura jerárquica en la que el 1 es el título principal y el resto definen subapartados.
- Así, veremos los tags _h1, h2, h3, h4, h5 y h6_, que deben seguir una estructura lógica en la web: no debemos tener un `h3` después de  `h1` si no hemos utilizado antes un `h2`.
- No tiene por qué haber un solo título principal.
- Los títulos se muestran con diferentes tipos de letra y tamaños. El navegador se encarga de aplicar un CSS muy básico a algunos tags por defecto, antes de que nosotros carguemos nuestro CSS.

  ```html
    <body>
      <h1>title</h1>
      <h2>subtitle</h2>
    </body>
  ```
##### El header

- El tag `<header>` define cuál es el encabezado y dnode debe estar la navegación principal de una página web.
- La información sobre la navegación por la página se marca con el tag `<nav>`, contenido dentro del header.
- Lo recomendable es que haya un header principal y dentro de cada sección, establecer encabezados secundarios. Respetar la jerarquía.

##### Main, section, article, aside, footer

-`<main>` señala cuál es el contenido principal del documento.
- `<section>` define una sección genérica de contenido en una página. Debe abrirse con un tag `<h1>` o tener un atributo *id*.
- `<article>` representa una parte de contenido que tiene sentido por sí mismo, esté o no en la página. Puede también contener su propio `<header>` y seguir con la jerarquía de encabezados de la página o iniciar una propia desde un nuevo `<h1>`.
- `<aside>` marca que esa parte de contenido está relacionado con la página, pero debe sobresalir del cuerpo principal. Estas secciones son a menudo representadas como barras laterales o como inserciones y contienen una explicación al margen.
- `< footer>` define un pie de página ( los `<article>` pueden incluir los suyos propios).
- Otros elementos: - `<p>` define un párrafo.

#####  Div y span

- `<div>` y  `<span>` son dos etiquetas que nos encontraremos con frecuencia y que no tienen valor semántico, esto es, no aportan información estructural sobre el contenido.

###### Div  y otros block tags

- `<div>`es un block tag. Esto quiere decir que se emplea para renderizar una línea nueva, para separar bloques de contenido.
- Puede contener otros block tags e inline tags.
- Es el block tag más genérico, pero hay más: https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements#Elements

###### Span y otros inline tags
-`<span>`es el más genérico de los inline tags. Se utiliza para hacer especificaciones dentro de la misma línea de texto.
- Sólo puede contener otros tags inline.
- Lista de tags inline: https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#Elements


### Modelos de contenido en HTML

Validador de la W3C: https://validator.w3.org/#validate_by_input

- El modelo de contido de HTML define la jerarquía a la hora de anidar los tags, cuáles pueden contener cuáles y en qué orden.
- Tradicionalmente solo había dos tipos de tags: tags de bloque (block) y  tags en línea (inline).
- HTML5 presenta un modelo más complejo con [7 tipos de tags](https://www.w3.org/TR/2011/WD-html5-20110525/content-models.html#kinds-of-content).
- Aún así, podemos seguir agrupándolos en dos metatipos:
  - Flow: los anteriores tags de tipo block.
  - Phrasing: los tags de tipo inline.
- Cuando el navegador renderiza el HTML no tiene en cuenta el espacio que dejamos entre los tags.
