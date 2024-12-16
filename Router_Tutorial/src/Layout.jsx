import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    {/* things will change here in outlet */}
    <Outlet />  
    <Footer />
    </>
  )
}

export default Layout