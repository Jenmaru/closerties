import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './video-react.css';
import i18next from 'i18next';
import { Provider } from 'react-redux';
import { initReactI18next } from 'react-i18next';
import filter from 'leo-profanity';
import MainPage from './pages/mainPage.jsx';
import store from './slices/StoreReducer.js';
import ru from './locales/ru';

const rollbarConfig = {
  accessToken: process.env.TOKEN_ROLLBAR,
  environment: 'production',
};

const init = async () => {
  filter.add(filter.getDictionary('ru'));
  const i18n = i18next.createInstance();
  await i18n.use(initReactI18next).init({
    resources: { ru },
    fallbackLng: 'ru',
  });

  return (
    <RollbarProvider config={rollbarConfig}>
      <ErrorBoundary>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </ErrorBoundary>
    </RollbarProvider>
  );
};

export default init;
