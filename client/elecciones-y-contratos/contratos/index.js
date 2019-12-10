import './eyc_contratos.css';
const { iframeResize } = require('iframe-resizer');

iframeResize({ checkOrigin: false }, '#contratos-campanas');
iframeResize({ checkOrigin: false }, '#contratos-partidos');

var app_campanas = document.getElementById('contratos-campanas');
var app_partidos = document.getElementById('contratos-partidos');

function showCampanas (e) {
	e.target.style.background = '#137fc0';
	document.getElementById('btn-partidos').style.background = '#0F669B';
	app_campanas.classList.remove('hidden');
	if (!app_partidos.classList.contains('hidden')) {
		app_partidos.classList.add('hidden');
	}
}

function showPartidos (e) {
	e.target.style.background = '#137fc0';
	document.getElementById('btn-campanas').style.background = '#0F669B';
	app_partidos.classList.remove('hidden');
	if (!app_campanas.classList.contains('hidden')) {
		app_campanas.classList.add('hidden');
	}
}


var btn_campanas = document.getElementById('btn-campanas');
btn_campanas.addEventListener('click', showCampanas);

var btn_partidos = document.getElementById('btn-partidos');
btn_partidos.addEventListener('click', showPartidos);

// Hot Module Replacement [HMR]
if (module.hot) {
	module.hot.accept();
}
