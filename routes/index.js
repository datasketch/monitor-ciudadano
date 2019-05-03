const keystone = require('keystone');
const middleware = require('./middleware');
const importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
const routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	if (process.env.NODE_ENV !== 'production') {
		const webpack = require('webpack');
		const config = require('../config/webpack.dev');
		const webpackDevMiddleware = require('webpack-dev-middleware');
		const webpackHotMiddleware = require('webpack-hot-middleware');
		const compiler = webpack(config);
		app.use(webpackDevMiddleware(compiler, {
			publicPath: config.output.publicPath,
			logLevel: 'error',
		}));
		app.use(webpackHotMiddleware(compiler, {
			log: false,
		}));
	}
	// Views
	app.get('/', routes.views.index);
	app.get('/about', routes.views.about);
	app.get('/datos/visor', routes.views.visor);
	app.get('/datos/informes', routes.views.informes);
	app.get('/datos/descargas', routes.views.descargas);
	app.get('/datos/metodologia', routes.views.metodologia);
	app.get('/participa', routes.views.participa);
	// app.get('/blog/:category?', routes.views.blog);
	// app.get('/blog/post/:post', routes.views.post);
};
