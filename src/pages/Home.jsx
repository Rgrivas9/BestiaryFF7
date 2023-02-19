import { useContext } from "react";
import { _3dContext } from "../context/_3dContext";

const Home = () => {
    const {login} = useContext(_3dContext)
  return (
    <main>
      <h1>Home</h1>
      <button onClick={()=>{login('2d',2)}}>2d</button>
      <button onClick={()=>{login('3d',3)}}>3d</button>
    </main>
  );
};
export default Home;
