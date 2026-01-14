import PlayGround from "./Components/PlayGround"
import StudentCard from "./Components/StudentCard"
import Countergame  from "./components/Countergame"
import Form  from "./components/Form"
import Layout from "./components/Layout"
import Todo from "./Components/Todo"
// import FinalTouch from "./FinalTouch"


function App() {

  return (
    <>
    <header className="flex p-5 border-b justify-around items-center">
      <h1 className="text-[40px] italic font-bold uppercase">React Revision Assignment</h1>
      <h2 className="text-[22px] font-extrabold cursor-pointer">Visit My Code</h2>
    </header>
    
    <PlayGround />
    <StudentCard />
    <Countergame />
    <Form />
    <Layout />
    <Todo />
    
    {/* <FinalTouch /> */}
      
    </>
  )
}

export default App