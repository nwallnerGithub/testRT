import FeedbackItem from './components/FeedbackItem'
import Header from './components/Header'
import { useState } from 'react'
import FeedbackData from './data/feedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'
import SeiteMitParametern from './pages/SeiteMitParametern'

function App() {
   const [feedback, setFeedback] = useState(FeedbackData)

   

   return (
      <FeedbackProvider>
         <Router>
            <div className='container'>
               <Header />
               <Routes>
                  <Route
                     exact
                     path='/'
                     element={
                        <>
                           <h1>Meine Feedback-Liste</h1>
                           <FeedbackForm />
                           <FeedbackStats />
                           <FeedbackList />
                           <AboutIconLink />
                        </>
                     }
                  ></Route>
                  <Route path='/about' element={<AboutPage />} />
                  <Route path='/seite/*' element={<SeiteMitParametern />} />
               </Routes>
            </div>
         </Router>
      </FeedbackProvider>
   )
}

export default App
