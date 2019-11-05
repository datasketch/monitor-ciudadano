const keystone = require('keystone');
const Methodology = keystone.list('Methodology').model;

exports = module.exports = async (req, res, next) => {
	const view = new keystone.View(req, res);
	const { locals } = res;
	locals.section = 'hechos-corrupcion';
	locals.subsection = 'metodologia';

	try {
		const methodology = await Methodology.find({ slug: 'hechos-de-corrupcion' });
		locals.methodology = methodology[0];
	} catch (error) {
		return next(error);
	}

	view.render('hechos-corrupcion/metodologia');
};
