const keystone = require('keystone');
const Post = keystone.list('Post').model;

exports = module.exports = async (req, res, next) => {
	const view = new keystone.View(req, res);
	const { slug } = req.params;
	const { locals } = res;
	locals.section = 'elecciones-y-contratos';
	locals.subsection = 'historias';
	locals.data = {
		story: {},
	};

	try {
		const story = await Post.findOne({ slug });
		locals.data.story = story;
		view.render('elecciones-y-contratos/historia');
	} catch (error) {
		return next(error);
	};
};
