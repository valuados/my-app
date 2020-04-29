import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Car, {app} from "./components/car/Car";
import * as serviceWorker from './serviceWorker';


const cars = [
    {
        name: 'BMW M2 Coupe',
        price: 'https://mochamanstyle.com/wp-content/uploads/2015/10/2016-BMW-M2-Coupe.jpg',
        img: '20000'
    },
    {
        name: 'Audi TT',
        price: 'https://article.images.consumerreports.org/w_598,h_436/prod/content/dam/cro/news_articles/cars/2016-Audi-TT-pr-1-2016-598',
        img: '15000'
    },
    {
        name: 'Rolls Royce',
        price: 'http://cdn-ds.com/stock/2017-Bentley-Continental-GT-V8-Coupe--Beverly-Hills-CA/seo/VAMP16966-SCBFT7ZA0HC061335/sz_108215/image-1.jpg',
        img: '50000'
    },
    {
        name: 'Mercedes amg coupe',
        price: 'https://auto.ndtvimg.com/car-images/big/mercedes-amg/gle-coupe/mercedes-amg-gle-coupe.jpg?v=2',
        img: '18000'
    },
]

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
    app,
    document.getElementById('car')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
