import { createStore, applyMiddleware, compose } from 'redux';
import { ipcRenderer } from 'electron';
import thunk from 'redux-thunk';
import { electronEnhancer } from 'redux-electron-store';
import rootReducer from '../reducers';

const enhancer = compose(
  applyMiddleware(thunk),
  electronEnhancer(true)
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      ipcRenderer.sendSync('renderer-reload');
      store.replaceReducer(require('../reducers')); // eslint-disable-line global-require
    }
    );
  }

  return store;
}
