import Image from 'next/image'
import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Project = ({ description, id, image, link, tags, name }) => {
  return (
    <div className="items-center bg-gray-800 rounded-lg shadow flex w-full max-w-[855px]">
      <figure className='w-[40%] min-w-[200px] h-full'>
        <Image className="w-full h-full object-cover rounded-lg rounded-r-none" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" width={200} height={200} />
      </figure>
      <div className="p-5">
        <h3 className="text-xl font-bold text-accent-500">
          <a href="#">{name}</a>
        </h3>
        <span className="text-gray-500 dark:text-gray-400">CEO & Web Developer</span>
        <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">{description}</p>


        <div className='flex gap-2'>
          {tags?.map((tag, index) => (
            <span className='bg-accent-700 hover:backdrop-brightness-75 text-xs tracking-wider w-fit py-0.5 px-2 rounded-full lowercase' key={index}>
              {tag}
            </span>
          ))}
        </div>

        <ul className="flex space-x-4 mt-3">
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaGithub fontSize={18} />
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <FaExternalLinkAlt fontSize={18} />
            </a>
          </li>

        </ul>


      </div>
    </div>
  )
}

export default Project