import React from 'react'
import {useData} from "../data/dataHook";
import {useCustomer} from "../customerHook/customerHook";
import CustomerOrders from "./customerOrder/customerOrder";
import "./grid.css";

function Orders() {
    const data=useData();
    const customer=useCustomer();
    return (
            customer=="0"?"":
           <center className="grid-container">
                {
                    data[customer].map((cust,index)=>{
                        return   <CustomerOrders  data={cust} key={index}/>
                    })
                }
            </center> 
            )
}

export default Orders;
