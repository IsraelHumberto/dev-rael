import Image from 'next/image'
import { hero } from '../../public/assets'

const Hero = () => {
  return (
    <div className="w-full text-beige flex items-center justify-center h-screen">
      <div className='text-8xl flex items-center justify-center border-teste w-full'>
        <span>DEV</span>
        <Image src={hero} alt="Foto" width={300} height={300} />
        <span>RAEL</span>
      </div>
    </div>
  );
};

export default Hero;
