const keystone = require('keystone');

exports = module.exports = (req, res) => {
	const view = new keystone.View(req, res);
	const { locals } = res;
	locals.section = 'elecciones-y-contratos';
	locals.subsection = 'campanas';
	view.render('elecciones-y-contratos/campanas');
};
