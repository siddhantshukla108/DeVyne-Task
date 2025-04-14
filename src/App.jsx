import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-200 min-h-[70vh]">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold'>Add a Todo</h2>
          <input type="text" className='bg-amber-50 w-80' />
          <button className='bg-violet-700 hover:bg-violet-900 px-3 py-1 font-bold text-white rounded-md m-4'>Add </button>
        </div>
        <h2 className='text-lg font-bold'>Your ToDos</h2>

        <div className="todos">
          <div className="todo flex">
            <div className="text">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </div>
            <div className="buttons">
              <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 font-bold text-white rounded-md mx-2'>
                Edit</button>            
              <button className='bg-violet-800 hover:bg-violet-950 p-2 py-1 font-bold text-white rounded-md mx-2' >
              Delete</button>         
                 </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
