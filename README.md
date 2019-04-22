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
