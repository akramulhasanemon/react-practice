import Counter from  './Counter';
import Result from './practice';
import Batsman from './Batsman';
import User from './user';
import Friends from './Friends';
import Student from './Student';
import Posts from './Posts';
import Todos from './Todos';


import'./App.css'
import { Suspense } from 'react';
// const fetchUsers=fetch('https://jsonplaceholder.typicode.com/users')
// .then(res=>res.json())


// //friend
// const fetchFriends=async()=>{
// const res=await fetch('https://jsonplaceholder.typicode.com/users');
// return res.json()
// }
// //student
// const fetchStudent=async()=>{
//  const res=await fetch('https://jsonplaceholder.typicode.com/users');
//  return res.json()
// }

const fetchPosts =async()=>{
const res=await fetch('https://jsonplaceholder.typicode.com/posts');
return res.json();
}
//todo connection
const fetchTodos =async()=>{
const res =await fetch('https://jsonplaceholder.typicode.com/todos');
return res.json();

}
function App(){
  // const FriendsPromise=fetchFriends();
  // const StudentsPromise=fetchStudent();
  const postPromise=fetchPosts();
  const todoPromise=fetchTodos();
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
  <Suspense fallback={<h4>Posts are coming....</h4>}>

<Posts postPromise={postPromise}></Posts>

  </Suspense>

  <Suspense fallback={<h4>Todo Loading....</h4>}>

 <Todos todoPromise={todoPromise}></Todos>
  </Suspense>
 
  
{/* <Suspense fallback={<h3>Loading...</h3>}>
  <User fetchUsers={fetchUsers}></User>
</Suspense>

<Suspense fallback={<h3>Friends are coming for trear...</h3>}>
<Friends FriendsPromise={FriendsPromise}></Friends>

</Suspense>

<Suspense fallback={<h3>Student are coming</h3>}>
<Student StudentsPromise={StudentsPromise}></Student>
</Suspense> */}

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