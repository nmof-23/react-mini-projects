import BasketItem from "./BasketItem";
import { moneyFormat } from "../helpers";

function Basket( { basket , total , resetCart}) {
    return ( 
        <>
            <div className="basket-container container">

                <h3>Shopping Details</h3>
                <ul>
                    {basket.map(item => (
                        <BasketItem key={item.id} item={item} />
                    ))} 
                </ul>

                <div className="total" >Total = {moneyFormat(total)}</div>

                <button className="reset-btn" onClick={resetCart}>Reset Cart</button>
            </div>

            
        </>
    );
}

export default Basket;