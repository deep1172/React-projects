import ReactDOM  from 'react-dom/client'
import './index.css'

import React from 'react'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/about/About.jsx'
import Footer from './components/footer/Footer.jsx'
import Contact from './components/contacts/Contact.jsx'
import User from './components/user/User.jsx'
import Github, { githubInfoLoader } from './components/github/Github.jsx'
// const router  = createBrowserRouter([
//   {
//   path: '/',
//   element: <Layout/>,
//   children: [
//     {
//       path: "",
//       element: <Home/>
//     },
//     {
//       path: "about",
//       element: <About/>
//     },
//     {
//       path: "footer",
//       element: <Footer/>
//     },
//     {
//       path: "contact",
//       element: <Contact/>
//     },
//   ]
// }]);

const router  = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element= {<Layout/>}>
      <Route path='' element= {<Home/>}/>
    <Route path='about' element= {<About/>}/>
    
    <Route path='contact' element= {<Contact/>}/>
    <Route path='user/:userid' element= {<User/>}/>
    <Route 
    loader={githubInfoLoader}
    path='github' element= {<Github/>}/>
    

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
