import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {
   return (
      <Card>
         <h2>About Page</h2>
         <p>
            <Link to={{ pathname: '/' }}>Hier</Link> geht's wieder zurück!
         </p>
      </Card>
   )
}

export default AboutPage
