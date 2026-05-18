import ReactDOM from 'react-dom/client';
import { AuthWrapper } from './app/AuthWrapper';
import { AnalyticsInitializer } from './utils/analytics';
import { registerPWA } from './utils/pwa-utils';
import { ARK_APP_ID } from './utils/site-config';
import './styles/index.scss';

// Ensure auth-client picks up the correct app_id for ArkTraders Hub
if (!localStorage.getItem('config.app_id')) {
    localStorage.setItem('config.app_id', String(ARK_APP_ID));
}

AnalyticsInitializer();
registerPWA()
    .then(registration => {
        if (registration) {
            console.log('PWA service worker registered successfully for Chrome');
        } else {
            console.log('PWA service worker disabled for non-Chrome browser');
        }
    })
    .catch(error => {
        console.error('PWA service worker registration failed:', error);
    });

ReactDOM.createRoot(document.getElementById('root')!).render(<AuthWrapper />);
