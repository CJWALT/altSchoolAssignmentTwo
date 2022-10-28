import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Pagination from './Pagination'
import  ErrorBoundary   from './ErrorBoundary';

const User = () => {
  return (
  
  <>
  
    <ErrorBoundary>
        <Link to ="/User/Pagination" className='user__link-btn'>click to view users</Link>

        <Routes> 
            <Route path="/Pagination" element={<Pagination />}/>
        </Routes>

    </ErrorBoundary>
</>
  )
}

export default User