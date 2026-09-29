
import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/all'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'


gsap.registerPlugin(ScrollTrigger)

export default function App() {
  return (
 <main className='h-[80000px]'>
 <NavBar/>
 <Hero/>

 </main>
  )
}
