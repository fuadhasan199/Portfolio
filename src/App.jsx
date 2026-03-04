import './App.css'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import About from "./Components/About"
import Skills from "./Components/Skills"
import Education from './Components/Education'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  return (
    // bg-base-100 ebong text-base-content theme switch-e auto color change kore
    <div className='min-h-screen bg-base-100 text-base-content overflow-x-hidden'> 
      <Navbar /> 
      <main> 
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="service"><Skills /></section>
        <section id="project"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>
    </div>
  )
}

export default App;