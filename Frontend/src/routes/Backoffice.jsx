import React from 'react'
import { Link } from 'react-router-dom'

function Backoffice() {
  return (
    <div>
      <h1>Backoffice</h1>

      <Link to="/Backoffice/edit"><h3>Edit</h3></Link>

    </div>

  )
}

export default Backoffice