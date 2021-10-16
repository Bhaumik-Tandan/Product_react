import React from 'react'
import {useCustomerSet} from "../../customerHook/customerHook";

function Dropdown(props) {
    const setCustomer=useCustomerSet();

    

    return (
        <div>
            <br/>
           <center> <select onChange={(e)=>setCustomer(e.target.value)}>
                <option value="0">Choose Customer</option>
                {
                props.customers.map((customerId)=>{
                    return <option key={customerId} value={customerId}>Customer Id {customerId}</option>
                })
                }
            </select></center> 
        </div>
    )
}

export default Dropdown;
