import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { _3dContext } from "../context/_3dContext"
const Header = () => {
    const {_3d, logout} = useContext(_3dContext)
    return(
        <header>
            <button onClick={()=>{logout()}}>Home</button>
            <div>
            {_3d=='3d' && <NavLink to='/bestiary3d'>Bestiary</NavLink>}
            {_3d=='2d' && <NavLink to='/bestiary2d'>Bestiary</NavLink>}
            <NavLink to='/data'>Data</NavLink>
            </div>
        </header>
    )
}
export default Header