import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import MainRouter from './router';
import initStore, { sagaMiddleware } from './store/configureStore';
import rootSaga from './saga';

import './index.css';
import './resources/i18n/i18next'
import * as serviceWorker from './serviceWorker';

import { MenuStatusProvider } from "./contexts/context";
import { ThemesStatusProvider } from "./contexts/themes";

import BubbleLoader from "./components/loaders";
import BubbleLoader2 from "./components/loader2";

const store = initStore();

sagaMiddleware.run(rootSaga);

const app = (
  <Suspense fallback={ <BubbleLoader/> }>
    <ThemesStatusProvider>
      <MenuStatusProvider>
        <Provider store={store} >
          <MainRouter />
        </Provider>
      </MenuStatusProvider>
    </ThemesStatusProvider>
  </Suspense>

);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
