import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AboutIconLink() {
   return (
      <div>
         <Link
            to={{
               pathname: '/about',
               search: '?test',
               hash: '#hash',
            }}
         >
            <FaQuestion size={30} />
         </Link>
      </div>
   )
}

export default AboutIconLink
