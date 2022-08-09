import { useState } from 'react';
import Homepage from './pages/home/Homepage'
import './App.css'
import { Route, Routes ,useNavigate} from 'react-router-dom';
import { io } from 'socket.io-client';

const socket = io();
function App() {
  const navigate = useNavigate()
  const [userName, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);

  }
  const handleRoomChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoom(e.target.value);
  }

  const joinRoom = () => {
    if(userName.trim() !== '' && room !== '') {
    socket.emit('join', { userName, room });
    navigate('/chat', {replace: true})
   
  }else{
    alert('Please enter a username and room');

  }
  return
}

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage userName={userName} handleChange={handleChange} handleRoomChange={handleRoomChange} room={room} joinRoom={joinRoom} />} />
      </Routes>




    </div>
  )
}

export default App
