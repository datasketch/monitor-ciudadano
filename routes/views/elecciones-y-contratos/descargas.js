const keystone = require('keystone');
const Download = keystone.list('Download').model;

exports = module.exports = async (req, res, next) => {
	const view = new keystone.View(req, res);
	const { locals } = res;
	locals.section = 'elecciones-y-contratos';
	locals.subsection = 'descargas';

	try {
		const documents = await Download.find({});
		locals.documents = documents;
	} catch (error) {
		return next(error);
	}

	view.render('elecciones-y-contratos/descargas');
};
