import Counter from  './Counter';
import Result from './practice';
import Batsman from './Batsman';
import User from './user';
import Friends from './Friends';

import'./App.css'
import { Suspense } from 'react';
const fetchUsers=fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())


const fetchFriends=async()=>{
const res=await fetch('https://jsonplaceholder.typicode.com/users');
return res.json()
}
function App(){
  const FriendsPromise=fetchFriends();
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
  
<Suspense fallback={<h3>Loading...</h3>}>
  <User fetchUsers={fetchUsers}></User>
</Suspense>

<Suspense fallback={<h3>Friends are coming for trear...</h3>}>
<Friends FriendsPromise={FriendsPromise}></Friends>

</Suspense>

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