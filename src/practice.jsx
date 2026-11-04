import{useState} from"react"
export default function Result(){

    const[num,setResult]=useState(1);

    const handleAdd=()=>{

        const newResult=num+5;
        setResult(newResult);

    }

    return(
        <div>
            <h3>Name:</h3>
            <h3>Count: {num}</h3>
            <button onClick={handleAdd}>Add num</button>
        </div>
    )

}