const keystone = require('keystone');
const Monitor = keystone.list('MonitorDownload').model;

exports = module.exports = async (req, res, next) => {
	const view = new keystone.View(req, res);
	const { locals } = res;
	locals.section = 'hechos-corrupcion';
	locals.subsection = 'descargas';
	try {
		const data = await Monitor.find({}, {}, { sort: '-createdAt' });
		locals.downloads = data || [];
		view.render('hechos-corrupcion/descargas');
	} catch (error) {
		return next(error);
	}
};
