const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * Download Model
 * ==========
 */

const Download = new keystone.List('Download', {
	map: { name: 'title' },
});

Download.add({
	title: { label: 'Título', type: String, required: true, initial: true },
	description: { label: 'Descrición', type: Types.Textarea },
	author: { label: 'Realizador', type: String },
	createdAt: { label: 'Fecha de creación', type: Types.Date, inputFormat: 'YYYY-MM' },
	updatedAt: { label: 'Fecha de actualización', type: Types.Date, inputFormat: 'YYYY-MM' },
	link: { label: 'Enlace de descarga', type: Types.Url },
});

Download.defaultColumns = 'title, description, author, updatedAt, link';
Download.defaultSort = '-updatedAt';
Download.register();
