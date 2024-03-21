import "./App.css";
import Counter from "./Contor";
import Team from "./Tem";

function App() {
  function handaleClick(){
    alert('all Done')
  }
  const  handaleClick2 =()=>{
    alert('2ed click')
  }

  const handaleClick3 =(num)=>{
    alert('3rd all ok '+5)
  }
  function allik(){
    alert('fast try')
  }
  const praties=()=>{
    alert('you dont try thies ')
  }
  const praties1=(num)=>{
    alert('you dont try thies '+num)
  }
  return (
    <>
    <Counter></Counter>
    <Team></Team>
      <h1>React Core concept</h1>
      <button onClick={handaleClick}>Chilk me</button>
      <button onClick={handaleClick2}>Chile me</button>
      <button onClick={()=>{
        alert('third clicked')
      }}>buton 3</button>
      <button onClick={()=>handaleClick3(2)}>Click 4</button>
      <button onClick={allik}>try-1</button>
      <button onClick={ praties}>try-2</button>
      <button onClick={()=> praties1(5)}>try-3</button>
    </>
  );
}

export default App;
