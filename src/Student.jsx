import { use } from "react";

export default function Student({StudentsPromise}){

    const Student=use(StudentsPromise)
    console.log(Student)

   return(
    <div className="card">
        <h3>connected :{Student.length}</h3>
    </div>
   )
}