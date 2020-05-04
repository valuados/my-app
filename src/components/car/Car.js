import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../../styles.css';
import App from "../../App";

function showCar(props) {
    return (
        <div className="card">
            <div className="card-img">
                <img
                    src={props.car.img}
                    alt={props.car.name}/>
            </div>
            <h3>{props.car.name}</h3>
            <p>{props.car.price}</p>
        </div>
    );
}

class Car extends React.Component {

  state = {
    cars: [
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
  }
  render() {
    return (
      <div classname="app">
        <div className="list">
          {this.state.cars.map(car => {

            return (
              <Car
                car = {car}
                key ={car.name + Math.random()}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Car />
  </React.StrictMode>,
  document.getElementById('root')
);
