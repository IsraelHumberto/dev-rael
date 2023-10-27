import React from 'react'
import PropTypes from "prop-types";

const Button = ({ href, type, children }) => {

  return (
    <a
      href={href}
      className={`cursor-pointer w-full block px-2 py-4 text-center border border-solid text-secondary-500 border-accent-500 hover:transition-all transition-all 
      ${type == 'primary' ? 'bg-accent-500  hover:bg-accent-600 hover:border-accent-600' : 'bg-transparent hover:backdrop-brightness-125 '}
      `}
    >
      {children}
    </a>
  )
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  href: PropTypes.string
}

export default Button