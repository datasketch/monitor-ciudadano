const keystone = require('keystone');
const Post = keystone.list('Post').model;

exports = module.exports = async (req, res, next) => {
	const view = new keystone.View(req, res);
	const { locals } = res;
	locals.section = 'elecciones-contratos';
	locals.subsection = 'historias';
	locals.data = {
		stories: [],
	};

	try {
		const stories = await Post.find({ state: 'published' }).sort('-publishedDate').limit(10);
		locals.data.stories = stories;
		view.render('elecciones-contratos/historias');
	} catch (error) {
		return next(error);
	}
};
