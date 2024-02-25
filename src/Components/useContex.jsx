import React, { useState } from "react";

export const AppContex = React.createContext()
export const AppProvider = ({children})=>{
    const[badgeCount,setBadgeCount]= useState(0)

    return <AppContex.Provider value={{badgeCount,setBadgeCount}}>{children}</AppContex.Provider>
}