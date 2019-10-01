const keystone = require('keystone');

exports = module.exports = (req, res) => {
	const view = new keystone.View(req, res);
	const { locals } = res;
	locals.section = 'corrupcion';
	locals.subsection = 'visor';
	view.render('corrupcion/visor');
};