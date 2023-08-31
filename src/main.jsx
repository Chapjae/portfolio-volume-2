import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Resume from "./pages/Resume.jsx"

const router = createBrowserRouter([
{
  path: "/",
  element: <App/>,
  errorElement: <ErrorPage/>,
  children: [
    {
      index: true,
      element: <About/>,
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      path: "/resume",
      element: <Resume/>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
