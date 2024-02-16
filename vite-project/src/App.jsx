import Home from './components/Home.jsx'
import Commentspage from './components/NestedStructure/Commentspage.jsx'
import Nextstep from './components/Nextstep.jsx'
import Pagination from './components/Paginationcomponent/Pagination.jsx'
import Search from './components/SearchingPage/Search.jsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Dropdown from './components/Dropdowns/Dropdown.jsx'

const appRouter=createBrowserRouter([
  {
      path:'/',
      element:<Home/>,
  },
        {
          path:'/searchpage',
          element:<Search/>
        },
        {
          path:'/comments',
          element:<Commentspage/>
        },
        {
          path:'/pagination',
          element:<Pagination/>
        },
        {
          path:'/progressbar',
          element:<Nextstep/>
        },
        {
          path:'/dropdown',
          element:<Dropdown/>
        }

])
function App() {
  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default App

