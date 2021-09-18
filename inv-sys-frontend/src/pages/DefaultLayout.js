import React from 'react'
import AppContent from '../components/AppContent'
import Header from '../components/Header'
import SideMenu from '../components/SideMenu'


const DefaultLayout = () => {
  return (
    <React.Fragment>
    <SideMenu/>
    <Header/>
    <AppContent/>
  </React.Fragment>
    

  )
}
export default DefaultLayout
