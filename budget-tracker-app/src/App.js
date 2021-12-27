import React,{useEffect, useState} from 'react';
import Header from './components/Header';
import products from "./products.json";
import Product from './components/Product';
import Basket from './components/Basket';
import './App.css';


function App() {
 
  const [money , setMoney] = useState(10000);
  const [basket , setBasket] = useState([]);
  const [total , setTotal] = useState(0);
  
  console.log(total);

  useEffect(() => {
    
    setTotal(basket.reduce((acc , item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    },0))

  },[basket])


  const resetCart = () => {
    setBasket([])
  }
  
   

  return (
    <div className="App">

        <Header money={money} total={total} />

        <div className='container products'>
            {products.map((product , index) => (
                <Product  key={index} product={product} basket={basket} setBasket={setBasket} money={money} total={total} />
            ))}

        </div>
          {total > 0 && 
            <Basket basket={basket} total={total} resetCart={resetCart} />
          }
      

    </div>
  );
}

export default App;
