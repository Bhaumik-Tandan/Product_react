import React, { useState,useContext} from 'react';



const Customer=React.createContext();

export function useCustomer()
{
    return useContext(Customer);
}


const CustomerSet=React.createContext();

export function useCustomerSet() {
    return useContext(CustomerSet);   
}



function CustomerHook({children}){
    const [customer, setCustomer] = useState("0");

    function ChangeCustomer(setVal)
    {
        setCustomer(setVal);  
    }

   


    return (
        <CustomerSet.Provider value={ChangeCustomer} >
        <Customer.Provider value={customer} >
            {children}
        </Customer.Provider>
        </CustomerSet.Provider>
    )
}

export default CustomerHook;