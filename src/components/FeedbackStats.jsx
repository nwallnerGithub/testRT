import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
   const {feedbacks} = useContext( FeedbackContext)
   let avg =
      feedbacks.reduce((acc, item) => {
         return acc + item.rating
      }, 0) / feedbacks.length

   avg = avg.toFixed(1)

   return (
      <div className='feedbackStats'>
         <h4>{feedbacks.length} Bewertungen</h4>
         <h4>Durchschnitt { isNaN(avg) ? 0 : avg}</h4>
      </div>
   )
}

export default FeedbackStats
