
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/all'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import FirstVideo from './sections/FirstVideo'


gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (
 <main className='h-[8000px]'>
 <NavBar/>
 <Hero/>
 <FirstVideo/>

 </main>
  )
}
