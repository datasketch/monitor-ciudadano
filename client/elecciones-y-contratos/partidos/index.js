import './eyc_partidos.css';

import { iframeResize } from 'iframe-resizer';

iframeResize({ checkOrigin: false }, 'iframe');

// Hot Module Replacement [HMR]
if (module.hot) {
	module.hot.accept();
}
