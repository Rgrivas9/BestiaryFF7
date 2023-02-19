import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";



export const _3dContext = createContext()
export const _3dContextProvider = ({children}) => {
    const [_3d,set_3d] = useState(null)
    const navigate = useNavigate()
    const login = (data,n) => {
        set_3d(data)
        navigate(`/bestiary${n}d`)
    }
    const logout = () => {
        set_3d(null)
        navigate('/')
    }
    return (
        <_3dContext.Provider value={{_3d,login,logout}}>
            {children}
        </_3dContext.Provider>
    )
}