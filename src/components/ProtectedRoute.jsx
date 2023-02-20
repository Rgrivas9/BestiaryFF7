import { useContext } from "react"
import { _3dContext } from "../context/_3dContext"
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {_3d} = useContext(_3dContext)
    if (_3d==null) {
        return <Navigate to='/'/>
    }
    return children
}
export default ProtectedRoute