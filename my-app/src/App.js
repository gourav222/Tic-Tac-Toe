import './App.css';
import Game from './Components/DoublePlayer';
import { Start } from './Components/Start';
import { Routes, Route,NavLink,swi } from "react-router-dom";
import { PlayerMode } from './Components/PlayerMode';
import { SinglePlayer } from './Components/SinglePlayer';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from "react-bootstrap";
function App() {
  return (
    <div Class="dash-board">
      <div className='start'>
        <NavLink exact to="/player_mode" >
          <Button class="btn btn-outline-success">
            Start
          </Button>
        </NavLink>
        <NavLink exact to="/player_mode"></NavLink>
      </div>
      <Routes>
          <Route path="/" element={<Start/>}/>
          <Route path="/player_mode" element={<PlayerMode/>}/>
          <Route path="/game" element={<Game/>}/>
          <Route path="/single-player" element={<SinglePlayer/>}/>
      </Routes>
    </div>
  )
  }

export default App;