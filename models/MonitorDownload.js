const keystone = require('keystone');
const Types = keystone.Field.Types;

/**
 * MonitorDownload Model
 * ==========
 */

const MonitorDownload = new keystone.List('MonitorDownload', {
	map: { name: 'title' },
	label: 'Datos Monitor Ciudadano',
});

MonitorDownload.add({
	title: { label: 'Título', type: String, required: true, initial: true },
	description: { label: 'Descrición', type: Types.Textarea },
	author: { label: 'Realizador', type: String },
	createdAt: { label: 'Fecha de creación', type: Types.Date, inputFormat: 'YYYY-MM' },
	updatedAt: { label: 'Fecha de actualización', type: Types.Date, inputFormat: 'YYYY-MM' },
	link: { label: 'Enlace de descarga', type: Types.Url },
});

MonitorDownload.defaultColumns = 'title, description, author, updatedAt, link';
MonitorDownload.defaultSort = '-updatedAt';
MonitorDownload.register();
