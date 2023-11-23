import './App.css'
import "@fontsource/source-code-pro";
import portrait from './assets/portrait.png'
import { useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { BiSolidVolumeMute, BiSolidVolumeFull, BiMath } from 'react-icons/bi'
import { FaChevronCircleLeft, FaChevronCircleRight, FaCss3Alt, FaHtml5, FaNode, FaPython, FaReact, FaUsers } from 'react-icons/fa'
import { FaBoltLightning } from "react-icons/fa6";
import { SiGnubash, SiMongodb } from "react-icons/si";
import { HiMail } from 'react-icons/hi'
import { TbSql } from "react-icons/tb"
import ConfettiExplosion from 'react-confetti-explosion';
import * as Tone from 'tone'
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselImage, setCarouselImage] = useState(0);
  const [displayedProject, setDisplayedProject] = useState(0)
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
      images: ['/images/twitter_clone/home.webp', '/images/twitter_clone/notifications.webp', '/images/twitter_clone/post.webp', '/images/twitter_clone/replies.webp', '/images/twitter_clone/profile.webp', '/images/twitter_clone/login.webp'],
    },
    {
      name: 'Racist-o-meter',
      description:
        `Flutter mobile and ReactJS webapp that uses voice recognition and ChatGPT to detect if a satetement is racist or not. It also gives a brief explanation of why it is racist, and uses MongoDB to save new responses and avoid redundant requests to the ChatGPT API. The backend uses NodeJS.`
      ,
      link: 'https://github.com/juanstakys/racist-o-meter',
      images: ['/images/racist_o_meter/racistScreen.webp', '/images/racist_o_meter/resopnseNotRacist.webp', '/images/racist_o_meter/responseRacist.webp'],
    },
    {
      name: 'Ajedrez a voz (Chess by voice)',
      description:
        `Web-based chessboard commanded by voice. Ideal for people with special accesibility needs.
        Great for people practicing chess coordinates. It uses the Web Speech API and the Chess.js library for validating moves.`
      ,
      link: 'https://github.com/juanstakys/ajedrez-a-voz',
      images: ['/images/ajedrez_a_voz/starting_position.webp', '/images/ajedrez_a_voz/after_several_moves.webp'],
    },
    {
      name: 'Conteo de palabras conocidas (Known words counter)',
      description: "My first original project: A Python program that shows random words from the Spanish dictionary, one at the time, and by selecting which ones you know and which ones you don't it estimates how many words of the dictionary you know. You can also click 'Quiero aprenderla' to open a tab with the dictionary definition of the word. It uses Tkinter for the GUI",
      link: 'https://github.com/juanstakys/conteo-de-palabras-conocidas',
      images: ['/images/conteo_de_palabras_conocidas/1.webp', '/images/conteo_de_palabras_conocidas/2.webp', '/images/conteo_de_palabras_conocidas/3.webp'],
    },
    {
      name: 'Email excel extractor',
      description: "Python script that uses Gmail's API to extract emails with a specific subject and saves all Excel attachments. It uses OAuth2.0 for authentication.",
      link: 'https://github.com/juanstakys/email-excel-extractor',
      images: ['/images/email_excel_extractor/1.webp', '/images/email_excel_extractor/2.webp', '/images/email_excel_extractor/3.webp', '/images/email_excel_extractor/4.webp'],
    },
    {
      name: 'Proyecto IOT (Olimpiadas INET) - IOT Project (INET Olympiads)',
      description: 'At the INET 2021 virtual Olympics we were asked to solve a problem that arose in times of COVID-19. It is based on creating a capacity management system, for that we implement web and Arduino technologies.',
      link: 'https://github.com/tgcorias/INET-Grupo-8',
      images: ['/images/iot/iot.webp'],
    }
  ]

  const AboutCard = () => (
    <div>
      <div className={"block sm:w-3/4 mb-4 mx-auto border-1 px-4 py-3 rounded-xl shadow-md bg-gradient-to-b from-white to-neutral-100 border-2"}>
        <span className='text-md'>
          Hi! I'm a passionate programmer from <span className='text-blue-500'>Argentina</span>, with a fervor for MATHS and LANGUAGE LEARNING. I've always been interested in technology and at 15 I started programming in C++. I engaged in Maths Olympiads at around the same age, until I finished secondary education.
          There, I discovered that I wanted to dedicate my life to technology and engineering, driven by my curiosity about the world and how it works and my enthusiasm for learning everyday and solving all kind of challenging problems. I'm also very interested in science, specially physics and astronomy. I enjoy facing problems with a logical perspective: that was always my greatest strenght. In those years, I met several friends with the same interests as mine and that helped me to develop my skills and knowledge faster. Immediately after finishing secondary school, I started working as a Software Developer at a consultant company in my country.
          <br />
          Beyond science and technology, I have a humanistic side. I love learning languages and I'm always looking for new ones to learn. I speak native Spanish and fluent English, and I have explored many other languages too. Nowadays I'm focused on learning French. I have also developed a strong interest in linguistics and philosophy.
          <br />
          I am currently pursuing a degree in Systems Engineering at <a className='underline decoration-dotted hover:font-bold hover:text-green-600' href='https://utn.edu.ar/' target='_blank'>Universidad Tecnológica Nacional</a>.
          Driven by a passion for creating innovative projects, I eagerly seek new and exciting opportunities to contribute my skills.

        </span>
      </div>
      <div className={"block sm:w-3/4 mb-4 mx-auto border-1 px-4 py-3 rounded-xl shadow-md bg-gradient-to-b from-white to-neutral-100 border-2"}>
        <h2 className='text-4xl mb-4'>Skills</h2>
        <ul className='text-xl'>
          <li className='flex flex-row gap-2 items-center'>
            <FaReact /> Frontend development with ReactJS</li>
          <li className='flex flex-row gap-2 items-center'><FaNode /> Backend with NodeJS</li>
          <li className='flex flex-row gap-2 items-center'><FaHtml5 />
            HTML</li>
          <li className='flex flex-row gap-2 items-center'><FaCss3Alt />
            CSS</li>
          <li className='flex flex-row gap-2 items-center'><SiMongodb /> MongoDB</li>
          <li className='flex flex-row gap-2'><TbSql /> SQL
          </li>
          <li className='flex flex-row gap-2 items-center'><FaPython /> Python</li>
          <li className='flex flex-row gap-2 items-center'><SiGnubash />  Linux shell (bash)</li>
          <li className='flex flex-row gap-2 items-center'><BiMath />
            Logical thinking</li>
          <li className='flex flex-row gap-2 items-center'> <FaBoltLightning />
            Fast learning</li>
          <li className='flex flex-row gap-2 items-center'></li>
          <li className='flex flex-row gap-2 items-center'><FaUsers /> Teamwork</li>
        </ul>
      </div>
    </div >
  )

  interface ProjectCardProps {
    name: string,
    description: string,
    link: string,
    images: Array<string>,
  }

  const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, link, images }) => (
    <div className={"flex flex-row gap-x-4 border-1 px-4 py-3 rounded-xl shadow-m bg-gradient-to-br from-white to-neutral-100 border-2"}>
      <img className='w-36 hover:cursor-pointer' src={images[0]} alt="" onClick={() => {
        setShowCarousel(true)
        setDisplayedProject(projects.findIndex(project => project.name === name))
      }} />
      <div className='w-3/4 text-left sm:text-center flex flex-col justify-between'>
        <h3 className='text-xl font-bold'>{name}</h3>
        <p className='text-sm sm:text-md'>{description}</p>
        <a className='text-sm sm:text-md truncate underline decoration-dotted hover:font-bold text-blue-800 hover:text-blue-700' href={link} target='_blank'>
          Link to the project repo
        </a>
      </div>
    </div>
  )

  const ProjectsCards = () => (

    <div className='flex flex-col w-full sm:w-3/4 gap-y-6 mx-auto'>
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
    <div className={"block w-full mb-4 border-1 px-4 py-3 rounded-xl shadow-md bg-gradient-to-b from-white to-neutral-100 border-2"}>
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

  const CarouselButton = ({ left }: { left?: boolean }) => (
    <div
      className='select-none hover:cursor-pointer text-neutral-500 text-3xl'
      onClick={() => {
        {
          left ? (
            carouselImage === 0 ? setCarouselImage(projects[displayedProject].images.length - 1) : setCarouselImage(carouselImage - 1)
          ) : (
            carouselImage === projects[displayedProject].images.length - 1 ? setCarouselImage(0) : setCarouselImage(carouselImage + 1)
          )
        }
      }}
    >
      {left ? (<FaChevronCircleLeft />)
        : (<FaChevronCircleRight />)}
    </div >
  )


  const ModalCarousel = ({ images }: { images: Array<string> }) => (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none select-none"
      >
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="">
            {/*header*/}
            <div className="absolute right-0 -top-10">
              <button
                className="text-4xl text-neutral-200 hover:text-red-200 hover:cursor-pointer"
                onClick={() => {
                  setShowCarousel(false)
                  setCarouselImage(0)
                }}
              >
                <IoMdCloseCircle />
              </button>
            </div>
            {/*body*/}
            <div className="flex flex-row items-center gap-x-2">
              <CarouselButton left />
              <div className="overflow-hidden justify-self-center self-center">
                <img src={images[carouselImage]}
                  style={{
                    "maxHeight": "80vh"
                  }} />
              </div>
              <CarouselButton />
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  )

  return (
    <div className="App" style={{ "fontFamily": "Coda" }}>

      <div><Toaster /></div>

      {/* Modal carousel */}
      {showCarousel ? <ModalCarousel images={projects[displayedProject].images} /> : null}

      <div className='fixed top-0 right-0 bg-neutral-200 rounded-bl p-1 text-2xl'>
        {easterEggDiscovered ? (<div onClick={() => setMuted(!muted)}> {muted ? <BiSolidVolumeMute /> : < BiSolidVolumeFull />} </div>) : null}
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
        <img id="pic" className="header-image h-40 w-36 mb-5 hover:cursor-pointer" src={portrait} alt="My face! haha" onClick={() => {
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
            toast('You found an easter egg!', {
              icon: '🎉',
              style: {
                background: 'lightgreen',
              }
            })
          }
        }} />
        <div className='flex flex-col items-center text-transparent text-7xl bg-clip-text bg-gradient-to-r from-black to-blue-400'>
          <h1 className='text-4xl md:text-7xl'>Juan Cruz Stakys</h1>
          <h2 className='select-none text-xl md:text-4xl'>- Fullstack developer -</h2>
        </div>
      </div>

      {/* Items */}
      <div className='flex flex-col sm:flex-row sm:gap-10 xl:gap-24 mt-20 items-center sm:mx-20 text-2xl xl:text-3xl text-center'>

        {/* About */}
        <div className='hover:cursor-pointer select-none w-1/2 mb-4 border-2 py-12 rounded-xl bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-tl hover:font-bold hover:shadow' onClick={() => {
          setDisplayDetails({ about: !displayDetails.about, projects: false, contact: false })

          playNote()
        }}>
          <h3>{"<About/>"}</h3>
        </div>
        {displayDetails.about &&
          <div className='sm:hidden text-sm text-left'>
            <AboutCard />
          </div>
        }

        {/* Projects */}
        <div className='hover:cursor-pointer select-none w-1/2 mb-4 border-2 py-12 rounded-xl bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-t hover:font-bold hover:shadow' onClick={() => {
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
        <div className='hover:cursor-pointer select-none w-1/2 mb-4 border-2 py-12 rounded-xl bg-gradient-to-br from-white to-neutral-100 hover:bg-gradient-to-r hover:font-bold hover:shadow' onClick={() => {
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
