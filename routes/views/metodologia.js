const keystone = require('keystone');

exports = module.exports = (req, res) => {
	const view = new keystone.View(req, res);
	const { locals } = res;
	locals.section = 'datos';
	locals.subsection = 'metodologia';
	view.render('metodologia');
};
