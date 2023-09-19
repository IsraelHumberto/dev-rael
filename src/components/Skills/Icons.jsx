import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icons = ({type, name, color}) => {
  return (
    <FontAwesomeIcon icon={[type, name]} color={color} />
  )
}

export default Icons