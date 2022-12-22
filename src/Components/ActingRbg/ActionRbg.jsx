import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AllGamesContext } from '../../AllGamesContext/AllGamesContext';
import { CategoriesContext } from './../../CategoriesContext/CategoriesContext';

export default function ActionRbg() {


  let {getMoreGames , count} = useContext(AllGamesContext)


  let {getGameCategory ,category} = useContext(CategoriesContext)



  useEffect(()=> {
    getGameCategory()
  },[])
  
  return <>
  
  
  
  <div className="row mt-lg-5 gx-5 gy-3 py-lg-5">
  {category.filter(category => category.genre === "MMORPG").slice(0,count).map((game , index)=> <div key={index} className="col-md-3 card-list "><Link to={`/GamesDetails/${game.id}`}> <div className="card shadow" >
  <img src={game.thumbnail} className="card-img-top w-100 text-muted " alt="..." />
  <div className="card-body">
    <div className='d-flex justify-content-between'><h5 className="card-title text-muted">{game.title.slice(0,15)}...</h5>
    <p className="badge rounded-pill  text-bg-primary me-3 ">Free</p></div>
    
<p className='text-muted'>{game.short_description.slice(0,25)}...</p>
    <div className='d-flex justify-content-between'>
    <i className="fa-solid fa-square-plus icon"></i>  
    <div className='d-flex'>
      <p className="badge rounded-pill px-3 text-bg-secondary me-2 text-dark">{game.genre}</p>
      <i className="fa-brands fa-windows  me-3 icon"></i>
      </div>
    </div>
    

  </div>

</div>
</Link>
</div> )}
  
  </div> 
  <button onClick={getMoreGames} className='btn btn-outline-info mt-5 mb-5'>See more</button>

  </>
}
