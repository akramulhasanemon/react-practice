import Counter from  './Counter';
import    Result from './practice';
import Batsman from './Batsman';
import'./App.css'

function App(){
function handleClick(){

  alert('i am clicked.')
}
const handleClick3=()=>{

  alert('clicked 3')
}
const handleAdd5 = (num) =>{

  const newNum=num+5;
  alert(newNum);
}


return(
  <>
  <h3>vite+react</h3>
  
  <Counter></Counter>
  <Batsman></Batsman>
  <Result></Result>
  
  <button onClick={handleClick}>click me</button>

  <button onClick={handleClick3}>click me 3</button>
  <button onClick={()=>alert('CLICK4')}> click me 4</button>

  <button onClick={()=> handleAdd5(10)}>Click Add5</button>

  </>
  
)

}
export default App