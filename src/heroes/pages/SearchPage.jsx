import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../helpers/getHeroesByName";
import { HeroCard } from "../components/HeroCard";
import { useMemo } from "react";


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  
  console.log("H");
  const { q = '' } = queryString.parse(location.search);

  const heroes = useMemo(() => getHeroesByName(q), [q]); 

  const { searchText, onInputChange } = useForm({
    searchText:q
  });

  const onSearchSubmit = (e) => {
     e.preventDefault();
    //  if(searchText.trim().length <= 1){ return}
     
     navigate(`?q=${searchText}`);
     
  }


  return (
    <>
        <h1>Search</h1>
        <hr />
        <div className="row">

        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input 
               type="text" 
               placeholder="Search a hero"
               className="form-control"
               name="searchText"
               autoComplete="off"
               onChange={onInputChange}
               value={searchText}
            />
            <button className="btn btn-outline-warning mt-1 w-100">Search</button>
          </form>

        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* {
           ( q === '')
              ?
              <div className="alert alert-primary">
                Search
              </div>
              : (!heroes.length)
                &&
                <div className="alert alert-danger">
                  No hero with <b>{ q }</b>
                </div>
          } */}
          <div className="alert alert-primary animate__animated animate__fadeIn" style={{display: q !== '' ? 'none' : ''}}>
              Search
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: (!heroes.length && q !== '') ? 'block' : 'none'}}>
              No hero with <b>{ q }</b>
          </div>

          {
            heroes.map(heroe => (
              <HeroCard key={heroe.id} {...heroe}/>
            ))
          }

        </div>
        </div>
    </>
  )
}
