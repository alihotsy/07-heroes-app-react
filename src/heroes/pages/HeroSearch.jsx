
import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { getHeroByid } from "../helpers/getHeroById";

export const HeroSearch = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroByid(id),[id] ) ;
  
  if(!hero){
    return <Navigate to="/"/>
  }

  return (
    <div className="row p-4">
      <div className="col-4">
        <img 
           src={require(`../../assets/heroes/${hero.id}.jpg`)} 
           alt="" 
           className="img-thumbnail animate__animated animate__fadeInLeft"
           />
      </div>
      <div className="col-8">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego} </li>
          <li className="list-group-item"><b>Publisher:</b> {hero.publisher} </li>
          <li className="list-group-item"><b>First Appearance:</b> {hero.first_appearance} </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{ hero.characters }</p>
        <button 
          className="btn btn-outline-danger"
          onClick={() => navigate(-1)}>
          Return
        </button>
      </div>

    </div>
  )
}
