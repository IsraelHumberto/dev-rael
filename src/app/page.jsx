import Skills from '@/components/Skills/Skills'
import Hero from '../components/Hero'
import Timeline from '../components/Timeline/Timeline'
import Head from 'next/head'


export default function Home() {
  return (
    <>
    <main className="w-full relative">
      <Hero />
       <Skills />
      <Timeline />

    </main>
    </>
  )
}
