const keystone = require('keystone');
const Download = keystone.list('Download').model;
const Methodology = keystone.list('Methodology').model;

exports = module.exports = async (req, res, next) => {
	const view = new keystone.View(req, res);
	const { locals } = res;
	locals.section = 'elecciones-contratos';
	locals.subsection = 'descargas';

	try {
		const documents = await Download.find({});
		const methodology = await Methodology.find({ slug: 'elecciones-y-contratos' });
		locals.methodology = methodology[0];
		locals.documents = documents;
	} catch (error) {
		return next(error);
	}

	view.render('elecciones-contratos/descargas');
};
