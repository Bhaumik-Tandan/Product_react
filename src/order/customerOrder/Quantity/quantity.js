import React,{useState} from 'react'
import {restCon} from "../../../RestConnection/restConnection";

function Quantity(props) 
{
    const [quantity,changeQuantity]=useState(props.quantity);

    async function increment()
    {
        changeQuantity(q=>q+1);
        await restCon({"quantity":quantity+1},"PATCH","orders/"+props.orderId)
    }

    async function decrement()
    {
        changeQuantity(q=>q-1);
        await restCon({"quantity":quantity-1},"PATCH","orders/"+props.orderId)
    }

    return (
        <div>
            <button onClick={increment}>+</button>{quantity}<button onClick={decrement}>-</button>
        </div>
    )
}

export default Quantity;
