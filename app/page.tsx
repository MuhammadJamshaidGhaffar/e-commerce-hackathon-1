import Image from 'next/image'
import Main_Section from './Main_Section'
import Footer from './Footer'
import Section2 from './Section2'
import Section3 from './Section3'

export default function Home() {
  return (
    <div>
      <Main_Section />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  )
}
