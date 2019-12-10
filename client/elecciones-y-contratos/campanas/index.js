import './eyc_campanas.css';
const { iframeResize } = require('iframe-resizer');

iframeResize({ checkOrigin: false }, 'iframe');

// Hot Module Replacement [HMR]
if (module.hot) {
	module.hot.accept();
}
