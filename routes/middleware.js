const { some } = require('lodash');


/**
	Initialises the standard view locals
*/
exports.initLocals = (req, res, next) => {
	res.locals.navLinks = [
		{ label: 'El monitor', key: 'about', href: '/about' },
		{ label: 'Hechos de corrupción', key: 'hechos-corrupcion', href: '/hechos-corrupcion/visor', submenu: true },
		{ label: 'Elecciones y contratos', key: 'elecciones-contratos', href: '/elecciones-contratos', submenu: true },
		{ label: 'Participa', key: 'participa', href: '/participa' },
	];
	res.locals.socialLinks = [
		{ icon: 'icon_twitter', href: 'https://twitter.com/transparenciaco' },
		{ icon: 'icon_mail', href: 'mailto:monitorciudadano@transparenciacolombia.org' },
		{ icon: 'icon_facebook', href: 'https://www.facebook.com/transparenciaporcolombia/' },
	];
	res.locals.user = req.user;
	next();
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = (req, res, next) => {
	const flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = some(flashMessages, msgs => msgs.length) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = (req, res, next) => {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
