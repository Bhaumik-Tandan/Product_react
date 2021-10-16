import React from 'react';
import {useData} from "../data/dataHook";
import DropDown from "./dropdown/dropdown";

function CustomerList() {
    const data=useData();
    return (
        <div>
            <DropDown customers={Object.keys(data)}/>
        </div>
    )
}

export default CustomerList;
