import './TicTacToe.css';
import circle from '../Assets/circle.png';
import cross from '../Assets/cross.png';

const TicTacToe =()=>{
   
  return(
    <div className='container'>
     <h1 className='title'>Tic Tac Toe</h1>
     <div className='board'>
      <div className='row1'>
        <div className='boxes'></div>
        <div className='boxes'></div>
        <div className='boxes'></div>
      </div>

      <div className='row2'>
        <div className='boxes'></div>
        <div className='boxes'></div>
        <div className='boxes'></div>
      </div>

      <div className='row3'>
        <div className='boxes'></div>
        <div className='boxes'></div>
        <div className='boxes'></div>
      </div>
     </div>
     <button  className='reset'>Reset</button>
    </div>
  )  
}

export default TicTacToe;