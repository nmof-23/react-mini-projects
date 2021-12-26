function Header(props) {

    const { money , total } = props
    return ( 
        <>
                {total > 0 && money - total !== 0 && (
                    <div>
                        You have $ {money - total} for spending.
                    </div>
                )}
                {total === 0 && (
                    <div>
                        You have $ {money} for spending.
                    </div>
                )}
                {money - total === 0 &&  (
                    <div>
                        you're out of money
                    </div>
                )} 


                 
        </>
    );
}

export default Header;