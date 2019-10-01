const keystone = require('keystone');
const middleware = require('./middleware');
const importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
const routes = {
	views: importRoutes('./views'),
	corrupcion: importRoutes('./views/corrupcion'),
	eyc: importRoutes('./views/elecciones-y-contratos'),
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
	app.get('/corrupcion/visor', routes.corrupcion.visor);
	app.get('/datos/visor', (req, res) => {
		res.redirect('/corrupcion/visor');
	});
	app.get('/visualiza', (req, res) => {
		res.redirect('/corrupcion/visor');
	});
	app.get('/explora', (req, res) => {
		res.redirect('/corrupcion/visor');
	});
	app.get('/corrupcion/informes', routes.corrupcion.informes);
	app.get('/datos/informes', (req, res) => {
		res.redirect('/corrupcion/informes');
	});
	app.get('/corrupcion/descargas', routes.corrupcion.descargas);
	app.get('/datos/descargas', (req, res) => {
		res.redirect('/corrupcion/descargas');
	});
	app.get('/corrupcion/metodologia', routes.corrupcion.metodologia);
	app.get('/datos/metodologia', (req, res) => {
		res.redirect('/corrupcion/metodologia');
	});
	app.get('/metodologia', (req, res) => {
		res.redirect('/corrupcion/metodologia');
	});
	app.get('/elecciones-y-contratos/historias', routes.eyc.historias);
	app.get('/elecciones-y-contratos/campanas', routes.eyc.campanas);
	app.get('/elecciones-y-contratos/partidos', routes.eyc.partidos);
	app.get('/elecciones-y-contratos/contratos', routes.eyc.contratos);
	app.get('/elecciones-y-contratos/descargas', routes.eyc.descargas);
	app.get('/participa', routes.views.participa);
	app.get('/contacto', (req, res) => {
		res.redirect('/participa');
	});
	app.get('/denuncia', routes.views.denuncia);
	// app.get('/blog/:category?', routes.views.blog);
	// app.get('/blog/post/:post', routes.views.post);
};
