import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './component/layout/Layout.jsx'
import Home from './component/home/Home.jsx'
import Cart from './component/cart/Cart.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function App() {

  let routes = createBrowserRouter([
    {path:'',element:<Layout/>,children:[
      {path:"home/:id",element:<Home/>},
      {path:"cart/:id",element:<Cart/>}
    ]},
  ])


  return <>


    <RouterProvider router={routes}>
</RouterProvider>

    
  </>
}
