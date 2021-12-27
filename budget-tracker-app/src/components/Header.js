import { moneyFormat } from "../helpers";

function Header(props) {

    const { money , total } = props
    return ( 
        <>
                {total > 0 && money - total !== 0 && (
                    <div className="header">
                        You have <span>{moneyFormat(money - total)}</span> for spending
                    </div>
                )}
                {total === 0 && (
                    <div className="header">
                        You have  <span>{moneyFormat(money)}</span> for spending
                    </div>
                )}
                {money - total === 0 &&  (
                    <div className="header">
                        you're out of money 😔 
                    </div>
                )} 


                 
        </>
    );
}

export default Header;