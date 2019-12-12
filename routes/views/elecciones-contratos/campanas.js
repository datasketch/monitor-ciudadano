const keystone = require('keystone');

exports = module.exports = (req, res) => {
	const view = new keystone.View(req, res);
	const { locals } = res;
	locals.section = 'elecciones-contratos';
	locals.subsection = 'campanas';
	view.render('elecciones-contratos/campanas');
};
