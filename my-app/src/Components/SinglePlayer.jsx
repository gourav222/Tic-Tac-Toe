import { Square } from "./Square"
import { useState } from "react";
import { handleWinner} from "./DoublePlayer";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export  function SinglePlayer(){
    const [state,setState] = useState(Array(9).fill(null));
    const handleTurn = (index) => {
        let copyState = [...state];
        copyState[index] = "O";    
        setState(copyState);
        if(!state[index] && index != 4 && !state[4]){
            copyState[4] = "X";
            setTimeout(() => {
                setState(copyState)
            },0);
        }
        else if(index == 4){
            copyState[8] = "X";
            setTimeout(() => {
                setState(copyState)
            },0);
        }
        else{
            let emptyElement = 0;
            state.forEach((items,i) => {
                if(items == null && !emptyElement && index != i)
                    emptyElement = i;
                console.log(items);        
            })
            copyState[emptyElement] = "X";
            setState(copyState);
        }
        
    }
    const navigate = useNavigate();
    const handlePlayAgain = () => {
        setState(Array(9).fill(null));
    }
    const handleAdditionalButton = () => {
        navigate("/player_mode");
    }
    return(
        <div className="single-player">
        {handleWinner(state) ? 
        (
            <>
                <div>
                    <h2 className="winner">Player {handleWinner(state)} Won The Game.</h2>
                    <br />
                    <Button className="play-again"onClick={handlePlayAgain}>Play Again</Button>
                </div>
            </>
        ) : 
        (
            <>
                
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
                   <Button onClick={() => {handleAdditionalButton()}} className="additional-button">
                    Start
                   </Button>
                </div>
            </>
        )
        }
       </div>
    )
}