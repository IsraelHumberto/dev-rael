'use client'

import React, { useContext, useEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import { ProjectContext } from '../Project/context';
import Image from 'next/image';

const Aside = () => {
  const [domReady, setDomReady] = useState(false)
  const { asideIsOpen, setAsideIsOpen, infoAside } = useContext(ProjectContext)

  useEffect(() => {
    setDomReady(true)
  }, [])


  const Content = () => (

    <div className={`${asideIsOpen ? 'translate-x-0' : '-translate-x-full'} absolute w-full h-full top-0 min-h-screen z-5 duration-300 transition-all bg-[#0000009b] backdrop-filter backdrop-blur-xs`}>
      <div className='w-full absolute h-full' onClick={() => { setAsideIsOpen(false) }}></div>
      <aside className='w-1/3 h-full absolute right-0 bg-accent-500 py-8 px-5 text-primary-500'>
        <h2 className='text-2xl font-bold mb-3'>{infoAside?.name}</h2>

        <figure className='mb-5'>
          <Image src="https://images.pexels.com/photos/13884280/pexels-photo-13884280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={500} height={500} className="w-full h-60 object-cover" alt="akdjkal" />
        </figure>

        <h3 className='text-xl font-bold mb-1'>Descrição</h3>
        <p className='mb-3'>{infoAside?.description}</p>

        <h3 className='text-xl font-bold mb-1'>Tecnologias usadas</h3>
        <div className='flex flex-wrap gap-1'>

          {infoAside?.tags?.map((tag, index) => (
            <span key={index} className='bg-primary-500 text-white text-sm rounded-full px-3 py-1 '>{tag}</span>

          ))}
        </div>
      </aside>
    </div>
  )

  const body = document.querySelector('#body');

  return domReady ? createPortal(
    <Content />, body
  ) : null
}

export default Aside