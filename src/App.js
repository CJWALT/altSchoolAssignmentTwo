import { Link, Route, Routes } from 'react-router-dom';
import User from './components/User'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound';
function App() {
  return (
    
    <main>
    <header>
            <h1>welcome to the Random Users page</h1> 
            <ul className='nav'> 
                <li>
                    <Link to="/" className="user__link active">Home</Link>
                     </li>
                <li>
                <Link to="/User" className="user__link">Users</Link>
                </li>
            </ul>
            <hr className='heading--bar'/>
           <Routes> 
            <Route path="/" element={<Home/>} />
            <Route path="/User/*" element={<User />}/>
            <Route path="*" element={<PageNotFound />}/>
            </Routes>
    </header>
    </main>

    );
}

export default App;
