import { Square } from "./Square"
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";
export default function Game(){
    const [state,setState] = useState(Array(9).fill(null));
    const [turn,setTurn] = useState(true);
    const handleTurn = (index) => {
         if(state[index] == null){
            if(turn){
                setTurn(false);
                state[index] = "O";
                setState(state);
            }
            else{
                setTurn(true);
                state[index] = "X";
                setState(state);
            }
         }
    }
    const handlePlayAgain = () => {
        setState(Array(9).fill(null));
    }
    return(
        <div className="game">
        {handleWinner(state) ? 
        (
            <>
                <div>
                    <h2 className="winner">Player {handleWinner(state)} Won The Game.</h2>
                    <br />
                    <Button  className="play-again" onClick={handlePlayAgain}>Play Again</Button>
                </div>
            </>
        ) : 
        (
            <>
                <h4 className="chance">Please {turn ? "O" : "X"} take you chance.</h4>
                <div className = "box">
                    <div className = "box-row">
                        <Square onClick={() => handleTurn(0)} value={state[0]}/>
                        <Square onClick={() => handleTurn(1)} value={state[1]}/>
                        <Square onClick={() => handleTurn(2)} value={state[2]}/>
                    </div>
                    <div className = "box-row">
                        <Square onClick={() => handleTurn(3)} value={state[3]}/>
                        <Square onClick={() => handleTurn(4)} value={state[4]}/>
                        <Square onClick={() => handleTurn(5)} value={state[5]}/>
                    </div>
                    <div className = "box-row">
                        <Square onClick={() => handleTurn(6)} value={state[6]}/>
                        <Square onClick={() => handleTurn(7)} value={state[7]}/>
                        <Square onClick={() => handleTurn(8)} value={state[8]}/>
                    </div>
                </div>
            </>
        )
        }
       </div>
    )
}
export function handleWinner(state) {
    const winingConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
     let checkWinner = false;
    winingConditions.forEach((items) => {
        const [a,b,c] = items;
        if(state[a] != null && state[a] === state[b] && state[b] === state[c])
            checkWinner = state[a];   
    })
    if(checkWinner)
        return checkWinner;
    return false
}