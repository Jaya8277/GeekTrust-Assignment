import React, { createContext, useState } from 'react';

export const CreateContextApp=createContext()

export const ContextProvider=({children})=>{
    const [cart,setCart]=useState([])
    const [data, setData] = useState([]);
    return (
        <CreateContextApp.Provider value={{cart,setCart,data, setData}}>
            {children}
        </CreateContextApp.Provider>
    )
}