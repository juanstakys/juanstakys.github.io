import './App.css'
import "@fontsource/source-code-pro";
import portrait from './assets/portrait.png'
import { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { BsFillVolumeUpFill, BsGithub, BsLinkedin } from 'react-icons/bs'
import { BiSolidVolumeMute } from 'react-icons/bi'
import { HiMail } from 'react-icons/hi'
import ConfettiExplosion from 'react-confetti-explosion';
import * as Tone from 'tone'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [displayDetails, setDisplayDetails] = useState({ about: false, projects: false, contact: false })
  const [clickCount, setClickCount] = useState(0)
  const [isExploding, setIsExploding] = useState(false);
  const [easterEggDiscovered, setEasterEggDiscovered] = useState(false)
  const [noteCount, setNoteCount] = useState(0)
  const [muted, setMuted] = useState(false)

  const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink'];

  const synth = new Tone.Synth().toDestination();

  const playNote = () => {
    if (!easterEggDiscovered) return

    const notes = [
      'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'B4', 'A4', 'G4', 'F4', 'E4', 'D4', 'C4',
    ]

    const fnaf_melody = [
      'B4', 'C#5', 'B4', 'G#4', 'G#4', 'G#4', 'F#4', 'G#4', 'A4', 'G#4',
      'A4', 'F#4', 'B4', 'G#4', 'E4', 'C#4', 'F#4', 'C4'
    ]


    // Melody to play:
    const melody_to_play: Array<string> = fnaf_melody

    if (!muted) {
      synth.triggerAttackRelease(melody_to_play[noteCount], '16n')
      setNoteCount(noteCount + 1)
    }
    if (noteCount === melody_to_play.length - 1) {
      setNoteCount(0)
    }

    function getRandomColor() {
      return (colors[Math.floor(Math.random() * colors.length)])
    }

    document.body.style.background = 'linear-gradient(' + (Math.random() * 360) + 'deg, white 0%, ' + getRandomColor() + ' 100%)'
  }

  const projects = [
    {
      name: 'Twitter clone',
      description:
        `Fullstack project made with React, Tailwind, NextJS, Prisma, MongoDB and NextAuth. Responsive and mobile-first.
        It features posting tweets, following users, liking, commenting, notifications, editing profile, and more.`
      ,
      link: 'https://github.com/juanstakys/twitter-clone',
      images: ['/public/images/twitter_clone/home.png', '/public/images/twitter_clone/notifications.png'],
    },
    {
      name: 'Racist-o-meter',
      description:
        `Flutter mobile and ReactJS webapp that uses voice recognition and ChatGPT to detect if a satetement is racist or not. It also gives a brief explanation of why it is racist, and uses MongoDB to save new responses and avoid redundant requests to the ChatGPT API. The backend uses NodeJS.`
      ,
      link: 'https://github.com/juanstakys/racist-o-meter',
      images: [portrait],
    },
    {
      name: 'Ajedrez a voz (Chess by voice)',
      description:
        `Web-based chessboard commanded by voice. Ideal for people with special accesibility needs.
        Great for people practicing chess coordinates.`
      ,
      link: 'https://github.com/juanstakys/ajedrez-a-voz',
      images: [portrait],
    },
    {
      name: 'Conteo de palabras conocidas (Known words counter)',
      description: "My first original project: A Python program that shows random words from the Spanish dictionary, one at the time, and by selecting which ones you know and which ones you don't it estimates how many words of the dictionary you know.",
      link: 'https://github.com/juanstakys/conteo-de-palabras-conocidas',
      images: [portrait],
    },
    {
      name: 'Email excel extractor',
      description: "Python script that uses Gmail's API to extract emails with a specific subject and saves all Excel attachments.",
      link: 'https://github.com/juanstakys/email-excel-extractor',
      images: [portrait],
    },
    {
      name: 'Proyecto IOT (Olimpiadas INET) - IOT Project (INET Olympiads)',
      description: 'At the INET 2021 virtual Olympics we were asked to solve a problem that arose in times of COVID-19. It is based on creating a capacity management system, for that we implement web and Arduino technologies.',
      link: 'https://github.com/tgcorias/INET-Grupo-8',
      images: [portrait],
    }
  ]

  const AboutCard = () => (
    <div className={`block w-3/4 mb-4 mx-auto border-1 px-4 py-3 rounded-xl shadow-md ${easterEggDiscovered ? "bg-white" : "bg-gradient-to-b from-white to-neutral-100 border-2"}`}>
      <span className='text-md'>
        Hi! I'm a programmer from <span className='text-blue-500'>Argentina</span>, very passionate about MATHS and LANGUAGE LEARNING. I was always interested in technology and at 15 I started programming in C++. I had participated in Maths Olympiads at around the same age, until I finished secondary education. Immediately after that, I started working as a Software Developer at a consultant company in my country.
        <br />
        I have explored many languages (human languages and programming languages). Nowadays I'm focused on learning French. I have also developed a strong interest in linguistics and philosophy, specially logical thinking.
        <br />
        Nowadays I'm studying Systems engineering at <a className='underline decoration-dotted hover:text-xl' href='https://utn.edu.ar/' target='_blank'>Universidad Tecnológica Nacional</a>.
        <br />
        I love making projects and I'm eager to participate in new, exciting ones.
      </span>
    </div>
  )

  interface ProjectCardProps {
    name: string,
    description: string,
    link: string,
    images: Array<string>,
  }

  const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, link, images }) => (
    <div className={`flex flex-row items-center gap-x-4 border-1 px-4 py-3 rounded-xl shadow-md ${easterEggDiscovered ? "bg-white" : "bg-gradient-to-br from-white to-neutral-100 border-2"}`}>
      <img className='h-40 w-36 mb-5' src={images[0]} alt="" onClick={() => setShowCarousel(true)} />
      <div className='text-md break-words'>
        <h3 className='text-xl font-bold'>{name}</h3>
        <p className='text-sm sm:text-md'>{description}</p>
        <a className='text-sm sm:text-md underline decoration-dotted hover:font-bold text-blue-800 hover:text-blue-700' href={link} target='_blank'>{link}</a>
      </div>
    </div>
  )

  const ProjectsCards = () => (

    <div className='flex flex-col w-3/4 gap-y-6 mx-auto'>
      {
        projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            link={project.link}
            images={project.images}
          />
        ))
      }
    </div>
  )

  const ContactCard = () => (
    <div className={`block w-full mb-4 border-1 px-4 py-3 rounded-xl shadow-md ${easterEggDiscovered ? "bg-white" : "bg-gradient-to-b from-white to-neutral-100 border-2"}`}>
      <div className='text-xl w-full'>
        <div>
          <p className='text-sm text-center mb-4'>You can find me at:</p>
        </div>
        <div>
          <ul className='list-none flex flex-col sm:flex-row justify-evenly gap-y-3'>
            <li><a className='flex flex-row gap-2 items-center underline hover:font-bold' target="_blank" href="https://github.com/juanstakys/"><BsGithub /> juanstakys</a></li>
            <li><a className='flex flex-row gap-2 items-center underline hover:font-bold' target="_blank" href="https://www.linkedin.com/in/stak/"> <BsLinkedin color={"#0072b1"} />  stak</a></li>
            <li><a className=' flex flex-row items-center gap-1 underline hover:font-bold' target='_blank' href="mailto:stakys.jc@gmail.com"><HiMail /> stakys.jc@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </div >
  )


  return (
    <div className="App" style={{ "fontFamily": "Coda" }}>

      <div><Toaster /></div>

      {showCarousel ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className=""
                    onClick={() => setShowCarousel(false)}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <div className='absolute top-0 right-0 bg-neutral-200 rounded-bl p-1 text-2xl'>
        <div onClick={() => setMuted(!muted)}> {muted ? < BsFillVolumeUpFill /> : <BiSolidVolumeMute />} </div>
        {/* TO-DO: Dark mode */}
      </div>

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

            if (easterEggDiscovered) return

            setEasterEggDiscovered(true)
            toast('Easter egg found!', {
              icon: '🎉',
              style: {
                background: 'lightgreen',
              }
            })
          }
        }} />
        <div className='flex flex-col items-center text-transparent text-7xl bg-clip-text bg-gradient-to-r from-black to-blue-400'>
          <h1 className='text-4xl md:text-7xl'>Juan Cruz Stakys</h1>
          <h2 className='text-xl md:text-4xl'>- Fullstack developer -</h2>
        </div>
      </div>

      {/* Items */}
      <div className='flex flex-col sm:flex-row sm:gap-10 xl:gap-24 mt-20 items-center sm:mx-20 text-2xl xl:text-3xl text-center'>

        {/* About */}
        <div className='w-1/2 mb-4 border-2 py-12 rounded-xl bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-tl hover:font-bold hover:shadow' onClick={() => {
          setDisplayDetails({ about: !displayDetails.about, projects: false, contact: false })

          playNote()
        }}>
          <h3>{"<About/>"}</h3>
        </div>
        {displayDetails.about &&
          <div className='sm:hidden'>
            <AboutCard />
          </div>
        }

        {/* Projects */}
        <div className='w-1/2 mb-4 border-2 py-12 rounded-xl bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-t hover:font-bold hover:shadow' onClick={() => {
          setDisplayDetails({ about: false, projects: !displayDetails.projects, contact: false })

          playNote()
        }}>
          <h3>{"<Projects/>"}</h3>
        </div>
        {displayDetails.projects &&
          <div className='pb-10 sm:hidden'>
            <ProjectsCards />
          </div>
        }

        {/* Contact */}
        <div className='w-1/2 mb-4 border-2 py-12 rounded-xl bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-r hover:font-bold hover:shadow' onClick={() => {
          setDisplayDetails({ about: false, projects: false, contact: !displayDetails.contact })

          playNote()
        }}>
          <h3>{"<Contact/>"}</h3>
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
        {displayDetails.projects && <ProjectsCards />}
        {displayDetails.contact && <ContactCard />}
      </div>
    </div>
  )
}

export default App
