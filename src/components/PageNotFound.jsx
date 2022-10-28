import React from 'react'

const PageNotFound = () => {
  return (
    <>
      <div className="errorpg__wrap">
        <div className="banner">
          <h1>404 Page <br/> <span className='nt--found'>not found </span></h1>

          <p>Looks like you're lost</p> 
        
        </div>
        <div className="banner__img">
          <img src='./err.png' alt='page not found'/>
        </div>
      </div>
    </>
  )
}

export default PageNotFound