
import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from "./Components/About"
import Skills from "./Components/Skills"
import Education from './Components/Education'
import Projects from './Components/Projects'
function App() {
  

  return (
     <div className='bg-white text-gray-900 overflow-x-hidden'> 

       <Navbar></Navbar>  

        <main> 
           <Hero></Hero> 
           <About></About> 
           <Skills></Skills> 
           <Education></Education> 
           <Projects></Projects>

        </main>
      
       

     </div>
  )
}

export default App
