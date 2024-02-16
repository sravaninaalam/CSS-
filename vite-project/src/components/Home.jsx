import { Link } from "react-router-dom"

const Home = () => {
  return (
   <>
        <div className="w-96 text-center p-10 shadow-xl mx-auto my-10 bg-gray-500 text-white">
            <h3 className="font-bold">Click on below feauture 👇🏻</h3>
            <ul className="list-decimal">
          <li>  <Link to='/searchpage'><h3>Search with debouncing</h3></Link></li>
          <li>  <Link to='/comments'><h3>Nested tree like structure</h3></Link></li>
          <li>  <Link to='/pagination'><h3>Pagination</h3></Link></li>
          <li>  <Link to='/progressbar'><h3>Statusbar</h3></Link></li>
          <li>  <Link to='/dropdown'><h3>Dropdowns</h3></Link></li>
          </ul>
        </div>
   </>
  )
}

export default Home
