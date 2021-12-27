import BasketItem from "./BasketItem";
import { moneyFormat } from "../helpers";

function Basket( { basket , total , resetCart}) {
    return ( 
        <>
            {basket.map(item => (
                <BasketItem item={item} />
            ))}

            <div>Total =  {moneyFormat(total)}</div>
            <button onClick={resetCart}>Reset Cart</button>
        </>
    );
}

export default Basket;