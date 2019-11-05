const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Methodology Model
 * ==========
 */

const Methodology = new keystone.List('Methodology', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Methodology.add({
	title: { label: 'Título', type: String, required: true },
	description: { label: 'Descripción', type: Types.Textarea },
	methodology: { label: 'Enlace metodología', type: Types.Url },
	glossary: { label: 'Enlace glosario', type: Types.Url },
});

Methodology.defaultColumns = 'title';
Methodology.register();
