import React, {useContext, useState} from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    
    const [isOpenSidebar, setIsOpenSidebar] = useState(false)

    const openSidebar = ()=>{
        setIsOpenSidebar(true)
    }
    const closeSidebar = ()=>{
        setIsOpenSidebar(false)
    }

    return <AppContext.Provider value={{isOpenSidebar, openSidebar, closeSidebar}}>{children}</AppContext.Provider>
}

export const useGlobalContext = ()=> {
    return useContext(AppContext)
}

export {AppContext, AppProvider}