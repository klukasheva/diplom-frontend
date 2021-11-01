import {createEpicMiddleware} from "redux-observable";
import {applyMiddleware, createStore} from "redux";
import {rootEpic, rootReducer} from "./redux";

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(epicMiddleware)
    );

    epicMiddleware.run(rootEpic);

    return store;
}