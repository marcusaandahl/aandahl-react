import styled from 'styled-components'
import ContactPage from '../components/pages/ContactPage'
import ExperiencePage from '../components/pages/ExperiencePage'
import LandingPage from '../components/pages/LandingPage'
import LocationPage from '../components/pages/LocationPage'
import ProjectsPage from '../components/pages/ProjectsPage'
import TechnologiesPage from '../components/pages/TechnologiesPage'
import SideMenuComponent from '../components/SideMenuComponent'

export default function Home() {
  return (
    <Main className='bg-gray1'>
      <SideMenuComponent />
      <LandingPage />
      <ProjectsPage />
      <ExperiencePage />
      <TechnologiesPage />
      {/* <LocationPage /> */}
      <ContactPage />
    </ Main>
  )
}

const Main = styled.main`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  z-index: -1;

  &::before {
    content: "";
    background-image: url("/assets/backgroundPattern.png");
    background-size: 720px 720px;
    background-repeat: repeat;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.3;
    z-index: -1;

    @media only screen and (max-width: 768px) {
      background-size: 195px 195px;
    }
  }
`
