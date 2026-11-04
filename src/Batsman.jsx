import { use, useState } from "react"

export default function Batsman(){
    const [runs, setRuns] =useState(0);
    const [sixes,setSixes]=useState(0);
    const [four,setFour]=useState(0);

    const handleSingle =()=>{
        const updatedRuns=runs+1;
        setRuns(updatedRuns)
      
    }
    const handleSix=()=>{
        const sixRuns=runs+6;
        const updatedSixes=sixes+1;
        setSixes(updatedSixes);
        setRuns(sixRuns);
    }
    const handleFour =()=>{
        const fourRuns=runs+4;
const totalFour=four+1;
 setFour(totalFour);

        setRuns(fourRuns);

    }

    return(
        <div>
            <h3>player: bangla Batsman</h3>
            <p><small>Six:{sixes}</small></p>
            <p><small>four:{four}</small></p>
            {
                runs>50 && <p>you score:50</p>
            }
            <h1>Score:{runs}</h1>
            <button onClick={handleSingle}>singles</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}