const moneyFormat = (money) => {
    return money.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    }) 
}
export  {moneyFormat}