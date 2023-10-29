'use client'

import React, { useEffect } from 'react'
import Project from './Project'
import { ProjectContext } from './context'
import { projectsSection } from '@/utils/projectsSection'
import { useState } from 'react'
import Aside from '../Aside/Aside'

const ProviderProjects = () => {
  const [asideIsOpen, setAsideIsOpen] = useState(false)
  const [infoAside, setInfoAside] = useState({})

  return (
    <ProjectContext.Provider value={{ asideIsOpen, setAsideIsOpen, infoAside, setInfoAside }}>
      <div className="max-w-[800px] columns-projects mx-auto">
        {projectsSection.projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
      <Aside />
    </ProjectContext.Provider>
  )
}

export default ProviderProjects