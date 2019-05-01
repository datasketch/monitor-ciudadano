import './about.css';
console.log('Hola about');

var pathname = window.location.pathname;
console.log(pathname);

// Hot Module Replacement [HMR]
if (module.hot) {
	module.hot.accept();
}
