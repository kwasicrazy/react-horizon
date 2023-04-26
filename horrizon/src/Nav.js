import React from 'react'


const Nav = () => {
  return (
    <div>
        <nav className="navbar navbar-light bg-light navbar">
  <a className="navbar-brand" href="#">
      <div><img className="logo" src="img/logo.jpg" height="50px;" width="50px;" alt="" /><u>Antech head offices</u></div>
  </a>
    <div className="flags">
    <img className='flags' src="img/GH.jpg" height="20px" width="30px" alt=""/><img className='flags' src="img/S.A.jpg" height="20px;" width="30px;" alt="" /><img className='flags' src="img/K.N.jpg" height="20px;" width="30px;" alt="" />
     </div>
     <div className=" Navbar-nav ml-auto about">
      <a href="#">About us</a>   
     </div>
  
</nav>
    </div>
  )
}

export default Nav