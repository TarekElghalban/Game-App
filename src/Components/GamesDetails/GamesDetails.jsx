import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { GamesDetailsContext } from './../../GamesDetailsContext/GamesDetailsContext';
import { useEffect } from 'react';
// import Carousel from 'react-bootstrap/Carousel';


export default function GamesDetails() {
let {getGamesDetails , gamesDetails} = useContext(GamesDetailsContext)
let {id} = useParams()


useEffect(()=> {
  getGamesDetails(id)
},[])

  return <>

<div className="row mt-lg-5 ms-lg-5 py-lg-5 pt-lg-5 mt-5 pt-5">
  <div className="col-md-4">
    <img src={gamesDetails.thumbnail} className='w-100' alt="" />
  </div>
  <div className="col-md-8 ">
  <h2 className='text-muted'>{gamesDetails.title}</h2>
<h4 className='text-muted'>{gamesDetails.short_description}</h4>
<h4 className='mb-2 mt-3'> Minimum System Requirements</h4>
{gamesDetails.minimum_system_requirements?<h5 className='text-muted mb-2'> graphics : {gamesDetails.minimum_system_requirements.graphics}</h5>:''}
 {gamesDetails.minimum_system_requirements?<h5 className='text-muted mb-2'>memory : {gamesDetails.minimum_system_requirements.memory}</h5>:''}

{gamesDetails.minimum_system_requirements?<h5 className='text-muted mb-2'>os : {gamesDetails.minimum_system_requirements.os}</h5>:''}
{gamesDetails.minimum_system_requirements?<h5 className='text-muted mb-2'>processor : {gamesDetails.minimum_system_requirements.processor}</h5>:''}
{gamesDetails.minimum_system_requirements?<h5 className='text-muted mb-2' >storage : {gamesDetails.minimum_system_requirements.storage}</h5>:''}





<h4 className='mt-lg-5'>Additional Information :</h4>
<div className='d-flex justify-content-between  mt-lg-5 '>
  <div className='text-center'>
  <p className='text-muted'>Title</p>
  <p>{gamesDetails.title}</p>
  </div>
  <div className='text-center'>
  <p className='text-muted'>Developer</p>
  <p>{gamesDetails.developer}</p>
  </div>
  <div className=' text-center'>
  <p className='text-muted'>Publisher</p>
  <p>{gamesDetails.publisher}</p>
  </div>
  
</div>



<div className='d-flex justify-content-between  mt-lg-5'>
  <div className=' text-center'>
  <p className='text-muted'>Release Date</p>
  <p>{gamesDetails.release_date}</p>
  </div>
  <div className=' text-center'>
  <p className='text-muted'>Genre</p>
  <p>{gamesDetails.genre}</p>
  </div>
  <div className=' text-center'>
  <p className='text-muted '>Platform</p>
  <div className='d-flex align-items-center '>
  <i className="fa-brands fa-windows m-0  me-2 icon"></i>

  <p className='m-0'>{gamesDetails.platform}</p>
  </div>
 
  </div>
  
</div>
  </div>
</div>







  </>
}
