'use client'
import Image from 'next/image'
import { hero } from '../../public/assets'
import { motion } from 'framer-motion';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io'
import Button from './Button'


const Hero = () => {

  return (
    <section className='lg:container lg:mx-auto section flex items-center justify-center flex-col  relative lg:flex-row-reverse lg:gap-12 min-h-screen'>
      <figure className='max-w-[600px] w-full lg:flex-1'>
        <Image src={hero} alt="Emoji do Desenvolvedor" width={600} height={600} className='relative bottom-6'/>
      </figure>
      <div className='md:py-6 lg:flex-1'>
        <h2 className='text-xl font-bold text-accent-500 font-heading'>DEV FRONT-END</h2>
        <h1 className='text-3xl md:text-5xl lg:py-4 font-bold text-secondary-500 font-heading'>Israel Humberto</h1>
        <h4 className='text-beige my-3 tracking-wide font-light'>Olá, pesssoal. Sejam bem vindos ao meu portifólio. Aqui você pode conhecer um pouco mais de mim e dos meus projetos!</h4>

        {/* BOTOES */}
        <div className='flex flex-col gap-3 py-3 md:flex-row lg:max-w-[450px]'>
          <Button type='primary' href='#' className='flex-auto'>Projetos</Button>
          <Button type='secondary' href='#' className='flex-auto'>Currículo</Button>
        </div>
      </div>

      <div className='relative flex my-3 gap-2 lg:absolute lg:bottom-1/2 lg:flex-col lg:-left-0 lg:translate-y-1/2'>
        <a href="">
          <IoLogoGithub fontSize={32} color='#d9a439'/>
        </a>
        <a href="">
          <IoLogoLinkedin fontSize={32} color='#d9a439'/>
        </a>
      </div>
    </section>
  );
};

export default Hero;
