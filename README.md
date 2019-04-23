# Monitor ciudadano

## Agregar página
Para agregar una página es necesario crear una ruta.

Las rutas se crean en `routes/index.js`. La estructura es la siguiente:

```js
app.get(route_name, route_handler);
```
Por ejemplo, para agregar una ruta `/about` se escribe de la siguiente manera:

```js
// routes/index.js
app.get('/about', routes.views.about);
```

La última parte del `route_handler` es el nombre del archivo. Todo lo que le precede es la ruta donde se encuentra ese archivo. Tomando el ejemplo como referencia, el `route_handler` estaría entonces ubicado en `routes/views/about.js`

El archivo que define el `route_handler` debe, al menos, tener el siguiente contenido:

```js
// routes/views/about.js
const keystone = require('keystone');

exports = module.exports = (req, res) => {
	const view = new keystone.View(req, res);
	view.render('about');
};
```

El valor de la función `view.render` debe ser igual al nombre de algún archivo situado en la carpeta `templates/views`.

Para el caso del ejemplo, la función define que hay un archivo llamado `about.pug` en la carpeta mencionada anteriormente.

Si necesita más información sobre el código que puede ser escrito en el `route_handler` consulte la documentación de [ExpressJS](http://expressjs.com/) y de [KeystoneJS](https://keystonejs.com/documentation). De igual manera, consulte la documentación de [Pug](https://pugjs.org/language/attributes.html) para más información.

## Agregar archivos de frontend
Seguramente querrá agregar estilos e interacción a la página que se acabó de crear. Para ello, es necesario crear los assets en la carpeta `/client`.

> Se recomienda crear una carpeta para cada una de las paǵinas. Por ejemplo, los archivos de la página `/about` deberían estar ubicados bajo el directorio `/client/about/`.

Supongamos que crea los siguientes archivos para la página de `about`:

```css
/* client/about/main.css */
p {
	color: red;
}
```

```js
// client/about/index.js
import './main.css';
console.log('Hola página de about');

// Hot Module Replacement [HMR]
if (module.hot) {
	module.hot.accept()
}
```

A continuación, estos archivos deben ser registrados en el archivo `webpack.common.js` bajo la llave `entry` del objeto que el archivo exporta. Este archivo se encuentra en el directorio `/config`.

Los valores dentro de la llave `entry` definen dos cosas: el nombre final del archivo y la ruta del código fuente.

De esta manera, si se quiere que los assets CSS y JS de la página `about` se llamen `about_page.css` y `about_page.js` respectivamente, se debe escribir la entrada de la siguiente manera

```js
// config/webpack.common.js
module.exports = {
	context: path.join(__dirname, '../client/'),
	entry: {
		// more assets here
		about_page: ['./about'] // equivalente a ['./about/index.js']
		// more assets here
	}
}
```

Los archivos procesados por webpack se ubican en la carpeta `/public/js/` y `/public/styles/`.

Por último, para enlazar estos archivos a la página se debe utilizar la [herencia de plantillas](https://pugjs.org/language/inheritance.html) de pug.

```pug
block css
	link(href="/styles/about_page.css", rel="stylesheet")

block main
	p About page

block js
	script(src="/js/about_page.js")
```