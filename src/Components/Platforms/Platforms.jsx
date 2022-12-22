import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Platforms() {
  return <>

<div className="row">
  <div className="col-md-12">
    <Outlet></Outlet>
  </div>
</div>
  </>
}
