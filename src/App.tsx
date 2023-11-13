import './App.css'
import "@fontsource/source-code-pro";
import portrait from './assets/portrait.jpeg'
import { useState } from 'react'

function App() {
  const [displayDetails, setDisplayDetails] = useState({ about: false, projects: false, contact: false })

  return (
    <div className="App">
      {/* Header */}
      <div className='mt-32 flex flex-col items-center'>
        <img className="h-40 w-36" src={portrait} alt="My face! haha" />
        <div className='flex flex-col items-center text-transparent text-7xl bg-clip-text bg-gradient-to-r from-black to-blue-400'>
          <h1 className='text-4xl md:text-7xl'>Juan Cruz Stakys</h1>
          <h2 className='text-xl md:text-4xl'>- Fullstack developer -</h2>
        </div>
      </div>

      {/* Items */}
      <div className='flex flex-col w-full sm:w-auto xl:gap-24 mt-28 items-center'>

        {/* About */}
        <div className='w-1/2 mb-4 border-2 py-12 rounded-xl bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-tl' onClick={() => setDisplayDetails({ about: !displayDetails.about, projects: false, contact: false })}>
          <h3 className='text-xl xl:text-4xl text-center'>{"<About/>"}</h3>
        </div>
        {displayDetails.about &&
          <div className='w-3/4 mb-4 border-2 px-4 py-3 rounded-xl bg-gradient-to-tl from-white to-blue-400'>
            <p className='text-md'>
              I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.
            </p>
          </div>
        }

        {/* Projects */}
        <div className='w-1/2 mb-4 border-2 py-12 rounded-xl bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-t' onClick={() => setDisplayDetails({ about: false, projects: !displayDetails.projects, contact: false })}>
          <h3 className='text-xl xl:text-4xl text-center'>{"<Projects/>"}</h3>
        </div>
        {displayDetails.projects &&
          <div className='w-3/4 mb-4 border-2 px-4 py-3 rounded-xl bg-gradient-to-br from-white to-blue-400'>
            <p className='text-md'>
              I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.
            </p>
          </div>
        }

        {/* Contact */}
        <div className='w-1/2 mb-4 border-2 py-12 rounded-xl bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-r' onClick={() => setDisplayDetails({ about: false, projects: false, contact: !displayDetails.contact })}>
          <h3 className='text-xl xl:text-4xl text-center'>{"<Contact/>"}</h3>
        </div>
        {displayDetails.contact &&
          <div className='w-3/4 mb-4 border-2 px-4 py-3 rounded-xl bg-gradient-to-b from-white to-green-400'>
            <p className='text-md'>
              I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.
            </p>
          </div>
        }

      </div>
    </div>
  )
}

export default App
