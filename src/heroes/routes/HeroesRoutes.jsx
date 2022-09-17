import { Route, Routes } from "react-router-dom"
import { Navbar } from "../../iu/components/Navbar"
import { DcPage } from "../pages/DcPage"
import { HeroSearch } from "../pages/HeroSearch"
import { MarvelPage } from "../pages/MarvelPage"
import { SearchPage } from "../pages/SearchPage"


export const HeroesRoutes = () => {
  return (
    <>
       <Navbar/>
       <div className="container">
        <Routes>
              <Route path='marvel' element={<MarvelPage/>}/>
              <Route path='dc' element={<DcPage/>}/>
              <Route path='search' element={<SearchPage/>}/>
              <Route path='hero/:id' element={<HeroSearch/>}/>
              <Route path='*' element={<MarvelPage/>}/>
        </Routes>

       </div>

    </>
  ) 
}
