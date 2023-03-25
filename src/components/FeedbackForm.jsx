import { useState } from 'react'
import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import { v4 as uuidv4 } from 'uuid'
import { useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
   const [text, setText] = useState('')
   const [message, setMessage] = useState(null)
   const [rating, setRating] = useState(10)
   const [isDisabled, setDisabled] = useState(true)


   const handleTextChange = (e) => {
      if (e.target.value === '') {
         setText('')
         setMessage(null)
         setDisabled(true)
      } else if (e.target.value !== '' && e.target.value.trim().length < 10) {
         setText(e.target.value)
         setMessage('Die Bewertung muss mindestens zehn Zeichen haben')
         setDisabled(true)
      } else {
         setText(e.target.value)
         setMessage(null)
         setDisabled(false)
      }
   }

   const { amUpdaten, zuEditierendesItem } = useContext(FeedbackContext)

   useEffect(() => {
      if (amUpdaten === true) {
         setText(zuEditierendesItem.text)
         setRating(zuEditierendesItem.rating)
         setDisabled(false)
      }
   }, [zuEditierendesItem])


   const { addFeedback, aenderungSpeichern } = useContext(FeedbackContext)
   
   const handleSubmit = (e) => {
      e.preventDefault()
      if (text.trim().length > 10) {

         const newFeedback = {
            id: uuidv4(),
            text,
            rating,
         }
         if ( amUpdaten) {
            newFeedback.id = zuEditierendesItem.id
            aenderungSpeichern( newFeedback)
         } else {
            addFeedback(newFeedback)
         }
         
         setText('')
         setDisabled( true)
         setRating (10)
      }
      
   }

   return (
      <Card>
         <form onSubmit={handleSubmit}>
            <h2>Wie würden Sie unseren Service bewerten?</h2>
            <RatingSelect
               
               setRating={(param) => {
                  setRating(param)
               }}

               rating={rating}
            />

            <div className='input-group'>
               <input
                  type='text'
                  onChange={handleTextChange}
                  placeholder='Text'
                  value={text}
               />
               <Button
                  type='submit'
                  version='secondary'
                  isDisabled={isDisabled}
               >
                  Senden
               </Button>
            </div>
         </form>
         {message && <div className='message'>{message}</div>}
      </Card>
   )
}

export default FeedbackForm
