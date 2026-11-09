import{use,useState} from"react"

export default function Result(){

const [runs,setRuns]=useState(0);
const [four,setFour]=useState(0);
const[white,setWhite]=useState(0);
const [six,setSixes]=useState(0);

const handleSingle=()=>{
const updatedRuns=runs+1;
const totalSingle=runs+1;
setRuns(totalSingle);


setRuns(updatedRuns)

}

const handleSix=()=>{
    const updatedSixes=runs+6;
    const totalSixes=six+1;
    setSixes(totalSixes)
    setRuns(updatedSixes)
}
const handleFour=()=>{
    const updateFour=runs+4;
    const totalFour=four+1;
    setFour(totalFour);
    setRuns(updateFour);
}
const handleWhite=()=>{
const updateWhite=runs+1;
const totalWhite=white+1;
setWhite(totalWhite);
setRuns(updateWhite);

}


return(
    <div>
        <h3>All score:{runs}</h3>
        <p><small>Four:{four}</small></p>
        <p><small>White Ball:{white}</small></p>
        <p><small>single:{runs}</small></p>
        <p><small>six:{six}</small></p>
        <button onClick={handleSingle}>single: </button>
        <button onClick={handleFour}>four</button>
        <button onClick={handleWhite}>white runs:</button>
        <button onClick={handleSix}>Six:</button>
    </div>
)

}

