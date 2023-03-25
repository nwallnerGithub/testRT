import React from 'react'

function RatingSelectItem({ num, selected, handleSelect }) {
   return (
      <li key={`rating-${num}`} className={ (selected === num) ? 'liSelected' : ''}>
         <input
            type='radio'
            name='rating'
            id={`num${num}`}
            onChange={handleSelect}
            checked={selected === num}
            value={num}
         />
         <label htmlFor={`num${num}`}>{num}</label>
      </li>
   )
}

export default RatingSelectItem
