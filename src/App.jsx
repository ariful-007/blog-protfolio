
import './App.css'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Main from './layout/Main';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Bloge from './pages/Bloge';
import Contact from './pages/Contact';

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/service',
          element:<Service></Service>
        },
        {
          path:'/blog',
          element:<Bloge></Bloge>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
