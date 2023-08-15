import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;
// Aqui podemos ver la configuracion y la creacion del store de Redux utilizando el reductor rootReducer y aplicando
// el middleware redux-thunk para gestionar acciones asíncronas.
// Además, permite habilitar la extensión Redux DevTools para facilitar la depuración del estado y las acciones de
// Redux en el navegador. El store se utilizará para mantener y gestionar el estado global de Redux.
const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) 
);

export default store;