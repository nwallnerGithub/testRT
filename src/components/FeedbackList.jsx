import React from 'react'

import FeedbackItem from './FeedbackItem'
import propTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import { motion, AnimatePresence } from 'framer-motion'

import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackList() {
   const {feedbacks} = useContext( FeedbackContext)

   if (!feedbacks || feedbacks.length === 0) {
      return <p>Keine Items vorhanden</p>
   } else {
      return (
         <ul>
            <AnimatePresence>
               {feedbacks.map((feedback) => {
                  return (
                     <motion.div key={feedback.id} initial={{ opacity: 0 }} animate={{ opacity:1}} exit={{opacity:0}}>
                        <FeedbackItem
                           key={uuidv4()}
                           item={feedback}
                        />
                     </motion.div>
                  )
               })}
            </AnimatePresence>
         </ul>
      )
   } 
}

FeedbackList.propTypes = {
   feedback: propTypes.arrayOf(
      propTypes.shape({
         id: propTypes.number.isRequired,
         text: propTypes.string.isRequired,
         rating: propTypes.number.isRequired,
      })
   ),
}

export default FeedbackList
