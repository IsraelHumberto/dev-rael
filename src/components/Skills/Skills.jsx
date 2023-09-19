'use client'
import React from 'react'
import Slider from "react-slick";
import Icons from './Icons';

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

const Skills = () => {
  return (
    <section className='bg-secondary-500 w-full'>
      <div className='lg:container lg:mx-auto section w-full'>
        <h2 className='text-center font-bold text-2xl font-heading text-primary-500'>Skills e Tecnologias</h2>

        <div className='flex gap-2'>
          <Slider {...settings}>
            {icons.map(({ type, name, title, color }, index) => (
              <figure className='relative w-full border-teste' title={title} key={index}>
                <Icons type={type} name={name} color={color}/>
              </figure>
            ))}
          </Slider>

        </div>
      </div>
    </section>
  )
}

export default Skills 