import { createContext, useState } from 'react'

const FeedbackContext = createContext()
export default FeedbackContext

export const FeedbackProvider = ({ children }) => {
   const [feedbacks, setFeedback] = useState([
      {
         id: 1,
         text: 'Das ist ein Feedback-Item 1 aus dem Kontext',
         rating: 5,
      },
      {
         id: 2,
         text: 'Das ist ein Feedback-Item 2 aus dem Kontext',
         rating: 10,
      },
      {
         id: 3,
         text: 'Das ist ein Feedback-Item 3 aus dem Kontext',
         rating: 6,
      },
   ])

   const deleteFeedback = (id) => {
      if (
         window.confirm(
            `Bist du dir sicher, dass das Item ${id} gelöscht werden soll?`
         )
      ) {
         setFeedback(
            feedbacks.filter((item) => {
               if (item.id !== id) {
                  return item
               }
            })
         )
      }
   }

   const [amUpdaten, setAmUpdaten] = useState(false)
   const [zuEditierendesItem, setZuEditierendesItem] = useState({})
   const editFeedback = (komplettesItemObjekt) => {
      setAmUpdaten(true)
      setZuEditierendesItem(komplettesItemObjekt)
   }

   const addFeedback = (neuerEintrag) => {
      setFeedback([neuerEintrag, ...feedbacks])
   }

   const aenderungSpeichern = (neuerEintrag) => {
      setFeedback(
         feedbacks.map((item) => {
            if (item.id === neuerEintrag.id) {
               return neuerEintrag
            } else {
               return item
            }
         })
      )
   }



   return (
      <FeedbackContext.Provider
         value={{
            feedbacks,
            amUpdaten,
            setAmUpdaten,
            zuEditierendesItem,
            addFeedback,
            aenderungSpeichern,
            deleteFeedback,
            editFeedback,
         }}
      >
         {children}
      </FeedbackContext.Provider>
   )
}
