import React from 'react'
import { useNavigate, Link, Routes, Route } from 'react-router-dom'

function SeiteMitParametern() {
   const navigateFunktion = useNavigate()
   const onClick = () => {
      navigateFunktion('/about')
   }

   return (
      <div>
         <h2>Test</h2>
         <p>
            <button onClick={onClick}>Navigiere</button>
         </p>
         <p>
            <Link to='/'>Zurück zur Startseite</Link>
         </p>
         <Routes>
            <Route
               path='/show'
               element={
                  <p>Dieser Text wird nur in besonderen Fällen angezeigt.</p>
               }
            />
         </Routes>
      </div>
   )
}

export default SeiteMitParametern
