import React,{useEffect, useState} from 'react';
import Header from './components/Header';
import products from "./products.json";
import Product from './components/Product';
import './App.css';


function App() {
 
  const [money , setMoney] = useState(36);
  const [basket , setBasket] = useState([]);
  const [total , setTotal] = useState(0);
  
  console.log(total);

  useEffect(() => {
    
    setTotal(basket.reduce((acc , item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    },0))

  },[basket])

  return (
    <div className="App">

        <Header money={money} total={total} />
        {products.map((product , index) => (
            <Product  key={index} product={product} basket={basket} setBasket={setBasket} money={money} total={total} />
        ))}


    </div>
  );
}

export default App;
