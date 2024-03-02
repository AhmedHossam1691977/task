import React from 'react'
import Navbar from '../nav/Navbar.jsx'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer.jsx'


export default function Layout() {
  return <>
  <Navbar/>
  <Outlet/>
  <Footer/>
  </>
}
