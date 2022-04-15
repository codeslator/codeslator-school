import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer } from './landingPage/Footer'
import { Header } from './landingPage/Header'

export const LandingPageLayout: FC = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
