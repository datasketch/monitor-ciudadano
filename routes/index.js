const keystone = require('keystone');
const middleware = require('./middleware');
const importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
const routes = {
	views: importRoutes('./views'),
	corrupcion: importRoutes('./views/hechos-corrupcion'),
	eyc: importRoutes('./views/elecciones-contratos'),
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
	app.get('/que-es', (req, res) => {
		res.redirect('/about');
	});
	app.get('/hechos-corrupcion/visor', routes.corrupcion.visor);
	app.get('/datos/visor', (req, res) => {
		res.redirect('/hechos-corrupcion/visor');
	});
	app.get('/visualiza', (req, res) => {
		res.redirect('/hechos-corrupcion/visor');
	});
	app.get('/explora', (req, res) => {
		res.redirect('/hechos-corrupcion/visor');
	});
	app.get('/hechos-corrupcion/informes', routes.corrupcion.informes);
	app.get('/datos/informes', (req, res) => {
		res.redirect('/hechos-corrupcion/informes');
	});
	app.get('/hechos-corrupcion/descargas', routes.corrupcion.descargas);
	app.get('/datos/descargas', (req, res) => {
		res.redirect('/hechos-corrupcion/descargas');
	});
	app.get('/hechos-corrupcion/metodologia', routes.corrupcion.metodologia);
	app.get('/datos/metodologia', (req, res) => {
		res.redirect('/hechos-corrupcion/metodologia');
	});
	app.get('/metodologia', (req, res) => {
		res.redirect('/hechos-corrupcion/metodologia');
	});
	app.get('/elecciones-contratos', routes.eyc.historias);
	app.get('/elecciones-contratos/historias/:slug', routes.eyc.historia);
	app.get('/elecciones-contratos/campanas', routes.eyc.campanas);
	app.get('/elecciones-contratos/partidos', routes.eyc.partidos);
	app.get('/elecciones-contratos/contratos', routes.eyc.contratos);
	app.get('/elecciones-contratos/descargas', routes.eyc.descargas);
	app.get('/participa', routes.views.participa);
	app.get('/contacto', (req, res) => {
		res.redirect('/participa');
	});
	app.get('/denuncia', routes.views.denuncia);

	app.use((req, res, next) => {
		res.end('404 Not Found');
	});

	app.use((err, req, res, next) => {
		console.log(err);
		res.end('500 Internal Server Error');
	});
	// app.get('/blog/:category?', routes.views.blog);
	// app.get('/blog/post/:post', routes.views.post);
};
