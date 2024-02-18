import Header from './assets/components/header'
import Footer from './assets/components/footer'
import MainLanding from './assets/components/LandingPage'
import SiteCourses from './assets/components/SiteCourses'
import CoursePresentation1 from './assets/components/CoursePresentation1'

import './assets/styles/landingWeb/responsive.css'
import './assets/styles/landingWeb/style.css'

import './assets/styles/landingWeb/responsive.css'
import './assets/styles/landingWeb/style.css'

function App (){
  return (
    <>
      <Header />
      {
        false && <MainLanding />
      }
      {
        false && <SiteCourses />
      }
      {
         true && <CoursePresentation1 />
      }
      <Footer />
    </>
  )
}

export default App