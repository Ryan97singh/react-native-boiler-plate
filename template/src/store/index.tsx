import { configureStore, combineReducers, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistReducer, persistStore } from 'redux-persist';
import { profileApi } from '@/store/services';
import tokenReducer from './reducers/token.reducer';
import userReducer from '@/store/reducers/user.reducer';
import { reduxStorage } from '@/utils/storage';
// import { encryptTransform } from 'redux-persist-transform-encrypt/lib';

//* Redux Toolkit Reducers Start

const rtkReducers = {
  [profileApi.reducerPath]: profileApi.reducer,
};

const rtkMiddlewares = [profileApi.middleware];

//* Redux Toolkit Reducers End

const reducers = combineReducers({
  ...rtkReducers,
  authToken: tokenReducer,
  user: userReducer,
  //   location: geolocationReducer,
  //   profile: patientProfileReducer,
  //   abhaAccount: abhaAccountReducer,
  //   fcmToken: fcmTokenReducer,
  //   statusBar: statusBarReducer,
});

const persistConfig = {
  key: 'root',
  storage: reduxStorage,
};

const rootReducer = (state: any, action: Action) => {
  if (action.type === 'LOGOUT') {
    return reducers(undefined, action);
  }

  return reducers(state, action);
};

const persistedReducer = persistReducer(
  {
    // transforms: [
    //   encryptTransform({
    //     secretKey: '9ej%7b6%lh67-j02spn)4l8yhrkc-b3f4qenlaakyig@-ndx8d',
    //     onError: function (error: any) {
    //       // Handle the error.
    //       console.error('Error in Encryption', error);
    //     },
    //   }),
    // ],
    ...persistConfig,
  },
  rootReducer,
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(rtkMiddlewares);

    if (__DEV__) {
      const createDebugger = require('redux-flipper').default;
      middlewares.push(createDebugger());
      console.log('Adding Redux Flipper to Middleware');
    }

    return middlewares;
  },
});

const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof reducers>;

export type AppDispatch = typeof store.dispatch;

export { store, persistor };
