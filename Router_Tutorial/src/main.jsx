import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',    // here / is bydefault
//     element: <Layout/>,   //this make Layout work as App.jsx
//     children: [
//       {
//         path: "",       // nothing after /
//         element: <Home />
//       },
//       {
//         path: "about",   // about after /
//         element: <About />
//       },
//       {
//         path: "contact",    // contact after /
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    // here, outlet in Layout file runs the chlidren routes given here
    <Route path='/' element={<Layout />}> 
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} >
        {/* <Route path='abc' />   it will craete about/abc*/}
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} /> 
      {/* write /user/xyz in search button */}
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
