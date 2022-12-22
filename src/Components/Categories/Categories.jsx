import React from 'react'
import { Outlet } from 'react-router-dom';

export default function Categories() {


  
  return <>
  <div className="row">
    <div className="col-md-12">
      <Outlet></Outlet>
      </div>
  </div>
  </>
}
