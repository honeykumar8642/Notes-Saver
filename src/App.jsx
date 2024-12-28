import { createBrowserRouter, RouterProvider} from "react-router-dom"
import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import { Pastes } from "./components/Pastes"
import ViewonePaste from "./components/ViewonePaste"


function App() {
  const router = createBrowserRouter(
    [
      {
        path:"/",
        element: 
        <div>
          <Navbar/>
          <Home/>

        </div>
      },
      {
        path:"/pastes",
        element: 
        <div>
          <Navbar />
          <Pastes/>
        </div>
      },
      {
        path:"/pastes/:id",
        element: 
        <div>
          <Navbar/>
          <ViewonePaste/>
          
        </div>
      },

    ]
  )
  return (
    <div>
      
      <RouterProvider router={router} />
      
    </div>
  )
}

export default App
