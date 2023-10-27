'use client'
import React from 'react'
import Slider from "react-slick";
import Icons from './Icons';
import Image from 'next/image';

const icons = [
  {
    type: 'fas',
    name: 'house',
    title: 'House',
    color: '#DD4B25',
  },
  {
    type: 'fab',
    name: 'css3-alt',
    title: 'CSS3',
    color: '#0C6FB2',
  }
]

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  pauseOnHover: true
};

const Skills = ({ data }) => {
  const { title, languages } = data
  return (
    <section className='bg-secondary-500 w-full'>
      <div className='lg:container lg:mx-auto section w-full'>
        <h2 className='text-center font-bold mb-6 text-3xl font-heading text-primary-500'>{title}</h2>

        <div className='flex gap-2 w-full justify-center flex-wrap'>
          {/* <Slider {...settings}> */}
          {languages?.map(({ image, name }, index) => (
            <figure className='relative mr-4 flex flex-col items-center' key={index}>
              {/* <Icons type={type} name={name} color={color}/> */}
              <Image src={image.url} width={64} height={64} alt={image.alt} className='w-[64px] h-[64px]' />
              <p className='mt-4 text-primary-400 text-xl'>{name}</p>
            </figure>
          ))}
          {/* </Slider> */}

        </div>
      </div>
    </section>
  )
}

export default Skills 