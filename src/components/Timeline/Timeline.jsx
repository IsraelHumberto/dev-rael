import React from 'react'
import Side from './Side'

const Timeline = () => {
  return (
    <div className="lg:container lg:mx-auto section sml:max-w-[800px] w-full h-full mx-auto">
      <div className="relative wrap overflow-hidden h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border sml:left-1/2 left-[20px]"></div>
          <Side 
            index={1} 
            year='2009-2010' 
            company='Fluminense Football Club' 
            resume='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi deleniti voluptate laboriosam doloremque cupiditate qui repudiandae quisquam!'
          />
          <Side 
            index={2} 
            year='2009-2010' 
            company='Fluminense Football Club' 
            resume='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi deleniti voluptate laboriosam doloremque cupiditate qui repudiandae quisquam!'
          />
          <Side 
            index={3} 
            year='2009-2010' 
            company='Fluminense Football Club' 
            resume='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi deleniti voluptate laboriosam doloremque cupiditate qui repudiandae quisquam!'
          />
          <Side 
            index={4} 
            year='2009-2010' 
            company='Fluminense Football Club' 
            resume='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi deleniti voluptate laboriosam doloremque cupiditate qui repudiandae quisquam!'
          />
          
      </div>
    </div>
  )
}

export default Timeline

