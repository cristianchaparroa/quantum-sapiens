import { useState } from 'react'
import Header from './assets/components/header'
import Footer from './assets/components/footer'
import LandingPage from './assets/components/LandingPage'
import SiteCourses from './assets/components/SiteCourses'
import CoursePresentation1 from './assets/components/CoursePresentation1'

import './assets/styles/landingWeb/responsive.css'
import './assets/styles/landingWeb/style.css'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <Header changePage={setCurrentPage} />
      {
        currentPage === 0 && <LandingPage changePage={setCurrentPage} />
      }
      {
        currentPage === 1 && <CoursePresentation1 changePage={setCurrentPage} />
      }
      {
      currentPage === 2 && <SiteCourses changePage={setCurrentPage} />
      }
      <Footer />
    </>
  )
}

export default App
