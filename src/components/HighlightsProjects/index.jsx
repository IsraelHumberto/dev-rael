import React from 'react'
import Project from './Project'
import Image from 'next/image'
import Button from '../Button'
import { projectsSection } from '@/utils/projectsSection'


const HighlightsProjects = () => {
  return (
    <section className='w-full'>
      <div className='lg:container lg:mx-auto section w-full'>
        <h2 className='text-center font-bold mb-6 text-3xl font-heading text-accent-500'>{projectsSection.title}</h2>
        <h2 className='text-center mb-6 font-heading text-secondary-500'>{projectsSection.subtitle}</h2>
        <div className="grid gap-8 mb-6 lg:mb-16 xl:grid-cols-2 place-content-center">

          {projectsSection.projects.map(({ description, id, images, link, tags, name }, index) => (
            <Project key={index} description={description} id={id} image={images[0]} link={link} tags={tags} name={name} />
          ))}

        </div>

        <div className='max-w-[350px] mx-auto'>
          <Button type='primary' href='/projetos'>Ver mais</Button>
        </div>

      </div>
    </section>

  )
}

export default HighlightsProjects