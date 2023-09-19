import Skills from '@/components/Skills/Skills'
import Hero from '../components/Hero'
import Timeline from '../components/Timeline/Timeline'
import Head from 'next/head'
import { createClient } from '../prismicio'


export default async function Home() {

  const primisc = createClient()

  const skills = await primisc.getSingle('skills')

  return (
    <>
      <main className="w-full relative">
        <Hero />
        <Skills data={skills.data} />
        <Timeline />

      </main>
    </>
  )
}
