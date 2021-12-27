import { moneyFormat } from "../helpers";

function Product( props ) {

    const { product , basket , setBasket , money , total } = props

    const basketItem = basket.find(item => item.id === product.id)

    const addBasket = () => {

        const checkBasket = basket.find(item => item.id === product.id);
        
        if(checkBasket){
            
            checkBasket.amount += 1;
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])

        }else{
            setBasket([...basket,{
                id: product.id,
                title: product.title,
                price: product.price,
                amount: 1
            } ])
        }


    }


    const removeBasket = () => {


        const currentBasket = basket.find(item => item.id === product.id);
        const basketWithoutCurrent =  basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1;
        
        if(currentBasket.amount === 0){
            
            setBasket([...basketWithoutCurrent])

        }else{
            
            
            setBasket([...basketWithoutCurrent, currentBasket])


        }


    }

    return ( 
       <div className="product">
            
            <img alt="product" src={product.image} />
            <h6>{product.title}</h6>
            <div className="price"> {moneyFormat(product.price)}</div>

            <div className="actions">
                <button className="buy-btn" disabled={product.price + total > money} onClick={addBasket} >Buy</button>
                <span className="amount">{basketItem && basketItem.amount || 0}</span>
                <button className="sell-btn" disabled={!basketItem} onClick={removeBasket}>Sell</button>
            </div>
            
       </div>

    );
}

export default Product;