
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from "./Components/About";
function App() {
  

  return (
     <div className='bg-white text-gray-900 overflow-x-hidden'> 

       <Navbar></Navbar>  

        <main> 
           <Hero></Hero> 
           <About></About>

        </main>
      
       

     </div>
  )
}

export default App
