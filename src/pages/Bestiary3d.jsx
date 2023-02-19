import { useEffect } from "react";
import Header from "../components/header";
const Bestiary3d = () => {
    useEffect(()=>{
        fetch('https://63f26f29f28929a9df5a9085.mockapi.io/enemies')
        .then((res) => res.json())
        .then((res) => {
        console.log(res)
      });
    },[])
  return (
    <>
      <Header></Header>
      <main>
        <h1>Bestiary3d</h1>
      </main>
    </>
  );
};
export default Bestiary3d;
