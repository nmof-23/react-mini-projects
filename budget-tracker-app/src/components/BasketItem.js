function BasketItem( { item } ) {
    return ( 
        <li className="basket-item">
            {item.title} x <span>{item.amount}</span>
        </li>
    );
}

export default BasketItem;
