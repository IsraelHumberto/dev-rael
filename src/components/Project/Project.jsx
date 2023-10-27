'use client'
import Image from "next/image"
import { projectsSection } from "@/utils/projectsSection"
import Modal from 'react-modal';
import { useState } from "react";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    backgroundColor: '#00333f'
  },
};

const Project = ({ project }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)


  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className=" mb-2 rounded-md relative group/project hover:fade-in-infos cursor-pointer" onClick={openModal}>
        <Image src="https://images.pexels.com/photos/13884280/pexels-photo-13884280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={500} height={500} className="w-full rounded-md" alt="akdjkal" />
        <div className="flex flex-wrap gap-1 absolute bottom-0 bg-gray-700 p-2 bg-opacity-50 w-full rounded-b group-hover/project:fade-in-infos">

          {project?.tags?.map((project, index) => (
            <span key={index} className="bg-gray-600 hover:backdrop-brightness-75 text-xs tracking-wider w-fit py-1 px-2 rounded-full lowercase">{project}</span>
          ))}
        </div>
      </div>
      {modalIsOpen &&
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          style={customStyles}
        >
          <div className="max-w-4xl">
            <h2>{project.name}</h2>
            <Image src="https://images.pexels.com/photos/13884280/pexels-photo-13884280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={500} height={500} className="max-h-[400px] w-full object-contain" alt="akdjkal" />
          </div>

        </Modal>
      }
    </>
  )
}

export default Project