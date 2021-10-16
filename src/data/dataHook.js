import React, {useState,useContext,useEffect} from 'react'
import {restCon} from "../RestConnection/restConnection";
import { groupDataByCustomer } from './groupDataByCustomer';

const Data=React.createContext();

export function useData()
{
    return useContext(Data);
}

function DataHook({children}){
    const [data, setData] = useState(0);

    useEffect(()=>{

        async function fetchData() 
        {
           const res= await restCon(undefined,"GET","orders");
           const data=await res.json();
           await groupDataByCustomer(data,setData);
        }

        fetchData();

    },[]);


    return (
        <Data.Provider value={data} >
            {children}
        </Data.Provider>
    )
}

export default DataHook;