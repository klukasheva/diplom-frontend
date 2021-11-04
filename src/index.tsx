import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import configureStore from "./configureStore";
import {BrowserRouter} from 'react-router-dom';
import {ProductSlideI} from "./components/slides/ProductSlide";
import {BasketActions} from "./redux/basket/actions";


export const store = configureStore()

const basketData = localStorage.getItem('basket')
if(basketData){
    try {
        const data: ProductSlideI[] = JSON.parse(basketData)
        data.forEach(item=>
            store.dispatch(BasketActions.pushBasketAction(item))
        )
    }
    catch (e) {
        console.error('localstorage is not defined')
    }
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
