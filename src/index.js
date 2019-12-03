import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/es/integration/react";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import "bootstrap/dist/css/bootstrap.min.css";

import * as serviceWorker from "./serviceWorker";
import ApiReducer from "./store/reducers/APIdata";
import DisplayReducer from "./store/reducers/displayEl";
import LoginReducer from "./store/reducers/login";
import OrderReducer from "./store/reducers/order";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["order"] 
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = combineReducers({
  api: ApiReducer,
  displayEl: DisplayReducer,
  login: LoginReducer,
  order: OrderReducer
});


const persistedReducer = persistReducer(persistConfig, reducer);

let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
