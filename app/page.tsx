import Image from 'next/image'
import Main_Section from './Main_Section'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'

export default function Home() {
  return (
    <div>
      <Main_Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  )
}
