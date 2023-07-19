'use client'
import Image from 'next/image'
import { hero } from '../../public/assets'
import { motion } from 'framer-motion';


const Hero = () => {

  return (
    <>
      <div className="w-full text-beige flex items-center justify-center flex-col gap-6 min-h-[600px]">
        <div className='text-xl flex items-center justify-center w-full font-bold md:text-8xl sm:text-4xl'>
          <h1 className='flex-1 text-end'>DEV</h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 'auto' }}
            transition={{ duration: 1 }}
            className='flex items-center justify-center max-w-[200px]'
          >
          <Image src={hero} alt="Foto" width={400} height={400}/>  

          </motion.div>
          <h1 className='flex-1'>RAEL</h1>
        </div>

        <p className='w-full text-center lg:w-4/5'>Olá, meu nome é <strong>Israel Humberto</strong>, eu sou desenvolvedor Front-end e aqui você pode conhecer um pouco mais de mim e dos meus projetos!</p>
      </div>

      {/* TAGS BACKGROUND */}
      <div className='absolute bottom-0 right-0 font-bold text-green-300 opacity-30 text-6xl'>
        &lt;/&gt;
      </div>
      <div className='absolute top-6 left-0 font-bold text-green-300 opacity-30 text-6xl'>
        &lt;&gt;
      </div>
      {/* END TAGS BACKGROUND */}
    </>
  );
};

export default Hero;
