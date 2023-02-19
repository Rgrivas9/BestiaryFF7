import { useEffect } from "react";
import Header from "../components/header";
import MinMaxFilter from "../components/MinMaxFilter";

const Bestiary2d = () => {
    /* useEffect(()=>{
        fetch('https://63f26f29f28929a9df5a9085.mockapi.io/enemies')
        .then((res) => res.json())
        .then((res) => {
        console.log(res)
      });
    },[]) */
  return (
    <>
      <Header></Header>
      <MinMaxFilter/>
      <main>
        <h1>Bestiary2d</h1>
      </main>
    </>
  );
};
export default Bestiary2d;
