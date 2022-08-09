import styles from './homepage.styles.module.css';


interface Props<T ,V> {
    userName: T;
    room: T;
    handleRoomChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    joinRoom:V
}
const Homepage =  ({userName, handleChange,room,handleRoomChange,joinRoom}:Props<string , any>) => {
    return (
       
            <div className={styles.container}>
              <div className={styles.formContainer}>
                <h1>{`<>DevRooms</>`}</h1>
                <input className={styles.input} placeholder='Username...' value={userName} onChange={handleChange}/>
        
                <select className={styles.input} onChange={handleRoomChange} value={room}>
                  <option>-- Select Room --</option>
                  <option value='javascript'>JavaScript</option>
                  <option value='node'>Node</option>
                  <option value='express'>Express</option>
                  <option value='react'>React</option>
                </select>
        
                <button className='btn btn-secondary' style={{ width: '100%' }} onClick={joinRoom}>Join Room</button>
              </div>
            </div>
         
    );
}

export default Homepage;