import React from 'react'
import { useState } from 'react'
import RatingSelectItem from './RatingSelectItem'
import {v4 as uuidv4} from 'uuid'

import { useEffect } from 'react'

function RatingSelect({ rating, setRating }) {
   const [selected, setSelected] = useState(10)

   const handleSelect = (e) => {
      setSelected(+e.currentTarget.value)

      //Ändert den Wert der Variable in der Forms-Komponente
      setRating(+e.currentTarget.value)
   }

   useEffect(() => {
      setSelected(rating)
   }, [rating])

   return (
      <ul className='rating'>
         {Array(10)
            .fill(1)
            .map((value, index) => {
               return (
                  <RatingSelectItem
                     key={ uuidv4() }
                     num={index + 1}
                     selected={selected}
                     handleSelect={handleSelect}
                  />
               )
            })}
      </ul>
   )
}

export default RatingSelect
