import React from 'react';
import ReactDOM from 'react-dom';
import { ProductsProvider } from "./components/ProductsProvider";
import { BrowserRouter } from "react-router-dom";
import App from './App';
import './index.css';

ReactDOM.render(
    <ProductsProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ProductsProvider>


    ,
    document.getElementById('root'));


