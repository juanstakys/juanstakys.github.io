import './App.css'
import "@fontsource/source-code-pro";
import portrait from './assets/portrait.png'
import { useState } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import ConfettiExplosion from 'react-confetti-explosion';

function App() {
  const [displayDetails, setDisplayDetails] = useState({ about: false, projects: false, contact: false })
  const [clickCount, setClickCount] = useState(0)
  const [isExploding, setIsExploding] = useState(false);

  const AboutCard = () => (
    <div className='block w-3/4 mb-4 mx-auto border-1 px-4 py-3 rounded-xl bg-gradient-to-b from-white to-blue-400'>
      <span className='text-md'>
        Hi! I'm a programmer from <span className='text-yellow-500'>Argentina</span>, very passionate about MATHS and LANGUAGE LEARNING. I was always interested in technology and at 15 I started programming in C++. I had participated in Maths Olympiads at around the same age, until I finished secondary education. Immediately after I started working as a Software Developer at a consultant in my country.
        <br />
        I have explored many languages (human languages and programming languages). Nowadays I'm focused on learning French. I have also developed a strong interest in linguistics and philosophy, specially logical thinking.
        <br />
        Nowadays I'm studying Systems engineering at Universidad Tecnológica Nacional.
        <br />
        I love making projects and I'm eager to participate in new, exciting ones.
      </span>
    </div>
  )

  const ProjectsCard = () => (
    <div className='block w-3/4 mb-4 mx-auto border-1 px-4 py-3 rounded-xl bg-gradient-to-br from-white to-blue-400'>
      <p className='text-md'>
        I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.
        I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.I'm a fullstack software developer, Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quae tenetur atque aspernatur eos. Quis blanditiis facilis soluta quidem pariatur ea alias libero adipisci vel reiciendis, aperiam odit officia. Delectus.
      </p>
    </div>
  )

  const ContactCard = () => (
    <div className='block w-full mb-4 border-1 px-4 py-3 rounded-xl bg-gradient-to-b from-white to-green-300'>
      <div className='text-xl w-full'>
        <div>
          <p className='text-sm text-center mb-4'>You can find me at:</p>
        </div>
        <div>
          <ul className='list-none flex flex-col sm:flex-row justify-evenly gap-y-3'>
            <li>  <a className='flex flex-row gap-2 items-center underline hover:font-bold' target="_blank" href="https://github.com/juanstakys/"><BsGithub /> juanstakys</a></li>
            <li><a className='flex flex-row gap-2 items-center underline hover:font-bold' target="_blank" href="https://www.linkedin.com/in/stak/"> <BsLinkedin />  stak</a></li>
            <li> <a className=' flex flex-row items-center gap-1 underline hover:font-bold' target='_blank' href="mailto:stakys.jc@gmail.com"><HiMail /> stakys.jc@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div >
  )


  return (
    <div className="App">

      <div className='absolute left-1/2'>
        {isExploding &&
          <ConfettiExplosion
            force={0.6}
            duration={2000}
            particleCount={80}
            width={1000}
            onComplete={() => setIsExploding(false)}
          />
        }
      </div>


      {/* Header */}
      <div className='mt-32 flex flex-col sm:flex-row justify-center gap-x-20 items-center'>
        <img id="pic" className="header-image h-40 w-36 mb-5" src={portrait} alt="My face! haha" onClick={() => {
          setClickCount(clickCount + 1)
          console.log(clickCount)
          if (clickCount === 5) {
            document.getElementById('pic')?.animate([
              { transform: 'rotateY(20deg)' },
              { transform: 'rotateY(360deg)' },
              { transform: 'rotateY(0deg)' }
            ], {
              duration: 750,
              iterations: 1
            })
            console.log('exploding')
            setIsExploding(true)
            setClickCount(0)
          }
        }} />
        <div className='flex flex-col items-center text-transparent text-7xl bg-clip-text bg-gradient-to-r from-black to-blue-400'>
          <h1 className='text-4xl md:text-7xl'>Juan Cruz Stakys</h1>
          <h2 className='text-xl md:text-4xl'>- Fullstack developer -</h2>
        </div>
      </div>

      {/* Items */}
      <div className='flex flex-col sm:flex-row sm:gap-10 xl:gap-24 mt-20 items-center sm:mx-20'>

        {/* About */}
        <div className='w-1/2 mb-4 border-2 py-12 rounded-xl bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-tl hover:font-bold' onClick={() => setDisplayDetails({ about: !displayDetails.about, projects: false, contact: false })}>
          <h3 className='text-xl xl:text-3xl text-center'>{"<About/>"}</h3>
        </div>
        {displayDetails.about &&
          <div className='sm:hidden'>
            <AboutCard />
          </div>
        }

        {/* Projects */}
        <div className='w-1/2 mb-4 border-2 py-12 rounded-xl bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-t hover:font-bold' onClick={() => setDisplayDetails({ about: false, projects: !displayDetails.projects, contact: false })}>
          <h3 className='text-xl xl:text-3xl text-center'>{"<Projects/>"}</h3>
        </div>
        {displayDetails.projects &&
          <div className='sm:hidden'>
            <ProjectsCard />
          </div>
        }

        {/* Contact */}
        <div className='w-1/2 mb-4 border-2 py-12 rounded-xl bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-r hover:font-bold' onClick={() =>
          setDisplayDetails({ about: false, projects: false, contact: !displayDetails.contact })
        }>
          <h3 className='text-xl xl:text-3xl text-center'>{"<Contact/>"}</h3>
        </div>
        {displayDetails.contact &&
          <div className='sm:hidden'>
            <ContactCard />
          </div>
        }

      </div>

      {/* Items from small viewport */}
      <div className='hidden sm:block mt-8'>
        {displayDetails.about && <AboutCard />}
        {displayDetails.projects && <ProjectsCard />}
        {displayDetails.contact && <ContactCard />}
      </div>
    </div>
  )
}

export default App
