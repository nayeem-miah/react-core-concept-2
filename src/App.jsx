
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Friends from './assets/Friends'
import Users from './assets/User'

function App() {
  function handlerClick (){
    alert('hello')
  }
  const clickHandler=()=>{
    alert('button clicked')
  }
  const addToFive=(num)=>{
    alert(num + 5)
  }
 

  return (
    <>
      
      <h3>React core concept- 2</h3>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      {/* <button onclick=handlerClick()>click me</button> */}
      <button onClick={handlerClick}>click me</button>
      <button onClick={clickHandler}>Click</button>
      <button onClick={()=>alert('third click')}> third</button><br /> <br />
      <button onClick={()=>addToFive(3)}>four</button>
      
      
      
    </>
  )
}

export default App
