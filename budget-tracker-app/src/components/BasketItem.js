function BasketItem( { item } ) {
    return ( 
        <div>
            {item.title} x {item.amount}
        </div>
    );
}

export default BasketItem;
