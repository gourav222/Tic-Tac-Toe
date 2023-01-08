import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";
export function PlayerMode(){
    const navigate = useNavigate();
    const handleDoublePlayer = () => {
        navigate("/game");   
    }
    const handleSinglePlayer = () => {
        navigate("/single-player");
    }
    const handleStart = () => {
        navigate("/player_mode")
    }
    return(
        <>
            <div className="select-mode">
                <Button className="button-1" onClick={() => {handleSinglePlayer()}}>Single Player</Button>
                <Button className="button-2" onClick={() => {handleDoublePlayer()}}>Double Player</Button>
            </div>
        </>
    )
}