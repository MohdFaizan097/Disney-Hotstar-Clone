import './App.css'
import Header from './Components/Header'
import Slider from './Components/Slider'
import GenreMovieList from './Components/GenreMovieList'
import ProductionHouse from './Components/ProductionHouse'

function App() {
  

  return (
    <>
      <div className="">
        <Header/>
        
        <Slider/>

        <ProductionHouse/>

        <GenreMovieList/>
      </div>
    </>
  )
}

export default App
