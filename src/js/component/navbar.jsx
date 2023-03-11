import React from 'react'


function Navbar () {

    return ( <nav className="nav flex-column">
  <a className="nav-link active" aria-current="page" href="#">Active</a>
  <a className="nav-link" href="#">Link</a>
  <a className="nav-link" href="#">Link</a>
  <a className="nav-link disabled">Disabled</a>
</nav>
    )
}

export default Navbar;