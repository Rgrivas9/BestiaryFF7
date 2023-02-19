import Header from "../components/header";
import bestiary from '../../bestiary.json'
const Data = () => {
    console.log(bestiary);
  return (
    <>
      <Header></Header>
      <main>
        <h1>Data</h1>
        <p>{JSON.stringify(bestiary)}</p>
      </main>
    </>
  );
};
export default Data;
