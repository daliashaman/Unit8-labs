import { useState } from "react";
import "../css/Votes.css";


function Votes(){
    const [cVotes, setCVotes] = useState(0);
    const [vVotes, setVVotes] = useState(0);
    const [sVotes, setSVotes] = useState(0);

    function getTotal(){
      return cVotes + vVotes + sVotes;
    }

    function displayPercentage(n:number, total:number){
      if(total === 0){
        return '0.0%';
      }
      else {
      return (n/total * 100).toFixed(1) + "%";
      }
    }

  return (
    <div className="Votes">
      <h2>Vote Here</h2>
      <div className="button-bar">
        <button onClick={() => setCVotes(cVotes + 1)}>Chocolate</button>
        <button onClick={() => setVVotes(vVotes + 1)}>Vanilla</button>
        <button onClick={() => setSVotes(sVotes + 1)}>Strawberry</button>
      </div>
      { getTotal() === 0 ? 
      <>
      <p>No votes yet!</p>
      </>
      :
      <>
      <p>
        <label>Chocolate</label> {cVotes} ({displayPercentage(cVotes, getTotal())});
      </p>
      <progress className="progressC" value={cVotes / getTotal()}></progress>
      <p>
       <label>Vanilla</label> {vVotes} ({displayPercentage(vVotes, getTotal())}); 
      </p>
      <p>
      <progress className="progressV" value={vVotes / getTotal()}></progress>
      <p>
      <label>Strawberry</label> {sVotes} ({displayPercentage(sVotes, getTotal())});  
      </p>
       <progress className="progressS" value={sVotes / getTotal()}></progress> 
      </p>

      </>  
    }
    </div>
  );
};

export default Votes;