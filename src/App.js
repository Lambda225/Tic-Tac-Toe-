import { useEffect, useState } from 'react';
import RestBtn from './components/RestBtn';
import TableScore from './components/TableScore';
import Wapper from './components/Wapper';

function App() {

  const WIN_CONDITIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  const [btnValue,setBtnValue] = useState(Array(9).fill(null))
  const [xUser, setXUser] = useState(true)
  const [score,setScore] = useState({xScore:0,oScore:0})

  const btnClick = (btnIdx) =>{
    const sub = btnValue.map((value,idx) =>{
      if(!btnValue[idx] && idx === btnIdx){
        return xUser ? 'x' : 'o'
      }else{
        return value
      }
    })

    setXUser(!xUser)

    setBtnValue(sub)
  }

  const restClick = () =>{
    setBtnValue(Array(9).fill(null))
    setXUser(true)
  }

  const checkWinner = (board) =>{
    for(let i= 0;i < WIN_CONDITIONS.length; i++){
      const [x,y,z] = WIN_CONDITIONS[i]

      if(board[x] && board[x] === board[y] && board[y] == board[z]){
        if (board[x] === 'x') {
          setScore({...score,xScore:score.xScore + 1 })
          setBtnValue(Array(9).fill(null))
        }else{
          setScore({...score,oScore:score.oScore + 1 })
          restClick()
        }
      }
    }
  } 
  
  useEffect(()=>{
    checkWinner(btnValue)
  },[btnValue])

  return (
    <div className=" flex h-screen flex-col items-center justify-center font-fredoka">
      <TableScore  xUser={xUser} score={score}/>
      <Wapper btnValue={btnValue} btnClick={btnClick}/>
      <RestBtn restClick={restClick} />
    </div>
  );
}

export default App;
