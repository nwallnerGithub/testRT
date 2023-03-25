import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

function Header({ text }) {
   return (
      <header>
         <h2>{text}</h2>
         <p>
            <NavLink to='/' className='nav'>
               Home
            </NavLink>
            <NavLink to='/about' className='nav'>
               About
            </NavLink>
         </p>
      </header>
   )
}

Header.defaultProps = {
   text: 'FeedbackUI',
}

Header.propTypes = {
   text: PropTypes.string.isRequired,
}

export default Header
