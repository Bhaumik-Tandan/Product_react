import React,{useState} from 'react'
import {restCon} from "../../../RestConnection/restConnection";

function Status(props) {
    const [status,setStatus]=useState(props.status);

    async function confirm()
    {
        setStatus("Confirmed");
        await restCon({"status":"Confirmed"},"PATCH","orders/"+props.orderId)
    }

    return (
        <div>
            {
            status=="Confirmed"?<>Confirmed</>:
            <button onClick={confirm}>Confirm</button>
            }
            
        </div>
    )
}

export default Status;
