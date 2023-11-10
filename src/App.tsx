import './App.css'
import "@fontsource/source-code-pro";
import { Routes, Route, Link } from 'react-router-dom'
import portrait from './assets/portrait.jpeg'


const Home = () => {
  return (
    <>
      <div className='mt-32 flex flex-row items-center justify-center gap-10'>
        <img className="h-40 w-36" src={portrait} alt="My face! haha" />
        <div className='flex flex-col items-center text-transparent text-7xl bg-clip-text bg-gradient-to-r from-black to-blue-400'>
          <h1 className='text-7xl'>Juan Cruz Stakys</h1>
          <h2 className='font-normal text-4xl'>- Fullstack developer -</h2>
        </div>
      </div>
      <div className='flex flex-row justify-evenly mt-20'>
        <div className='border-2 px-10 py-4 rounded-xl bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-tl'>
          <Link className='text-2xl' to='/about'>{"<About/>"}</Link>
        </div>
        <div className='border-2 px-10 py-4 rounded-xl bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-t'>
          <Link className='text-2xl' to='/projects'>{"<Projects/>"}</Link>
        </div>
        <div className='border-2 px-10 py-4 rounded-xl bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-r'>
          <Link className='text-2xl' to='/contact'>{"<Contact/>"}</Link>
        </div>
      </div>
    </>
  )
}

const About = () => {
  return (
    <div>
      <h1>About me</h1>
      <p>My name is Juan Cruz Stakys, I'm a fullstack developer from Argentina.</p>
    </div>
  )
}

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <p>Here are some of my projects.</p>
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>You can contact me at <a href="mailto: stakys.jc@gmail.com">stakys.jc@gmail.com</a>.</p>
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
