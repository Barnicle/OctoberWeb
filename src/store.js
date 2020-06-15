import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
let store;

const initialState = {
  data: null,
};

const reducer = (state = initialState, action) => {
  let form;
  switch (action.type) {
    case 'PHONE_IS_VALID':
      form = { ...state.form, phone: true };
      return { ...state, form };
    case 'EMAIL_IS_VALID':
      form = { ...state.form, email: true };
      return { ...state, form };
    case 'TEXTARIA_IS_VALID':
      form = { ...state.form, text: true };
      return { ...state, form };
    case 'FORM_IS_VALID':
      form = { ...state.form, isValid: true };
      return { ...state, form };
    case 'CHECKBOX_IS_VALID':
      form = { ...state.form, checkBox: true };
      return { ...state, form };
    default:
      return state;
  }
};

function initStore(preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });

    store = undefined;
  }

  if (typeof window === 'undefined') return _store;
  //Создает store один раз на клиенте
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

export const getData = (state) => state.data;
export const getFormData = (state) => state.form;
