import { createContext, useState } from "react";


export const AppContext = createContext()
export const AppProvider = (props) => {
    const [getCount,setCount]=useState(0)
    return <AppContext.Provider value={{getCount}}>
        {props.children}
    </AppContext.Provider>
}