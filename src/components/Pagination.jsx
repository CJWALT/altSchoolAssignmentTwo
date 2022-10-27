import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = () => {


    //state to get user data form an api
   const [responseUser, setResponseUser] =useState([]);

    //set loading state 
    const [loading, setLoading] = useState(false);

    React.useEffect(()=>{ 


        const fetchUser = async () =>{ 
            try{
                setLoading(true)
                const response = await fetch("https://randomuser.me/api/?page=1&results=4&seed=abc");
            
                const data = await response.json();
                const {results} = data;
                setLoading(false)
            setResponseUser(results);
                
            }catch(err){ 
                setLoading(false)
                console.error("couldnt fetch data")
            }
    };

        fetchUser(); 
    }, [])


    const fetchData = async (currentPage) =>{ 
        const res = await fetch ( 
            `https://randomuser.me/api/?page=${currentPage}&results=4&seed=abc`
            );
        const data = await res.json(); 
        const {results} = data;
        return results
    };



    const handlePageClick = async (data) =>{
        let currentPage = data.selected + 1
        const usersFromServer = await fetchData(currentPage)
        setResponseUser(usersFromServer);
    
    }

   



   return (
         <>
            <div className="user__table">
            
                <div className="user__table-heading">
                    <h3> 
                        Name
                    </h3>
                    <h3> 
                        Phone Number
                    </h3>
                    <h3> 
                        Gender
                    </h3>
                    <h3> 
                        Email
                    </h3>
                    <h3> 
                        Country
                    </h3>
                </div>
                {loading ? <p>Loading..</p> : responseUser.map(({gender, name, phone, location, email})=>{ 
                    return(
                            
                          <div className="user__table-body" key={email}>
                            <p>{name.first} {name.last}</p>
                            <p>{phone}</p>
                            <p>{gender}</p>
                            <p>{email}</p>
                            <p>{location.country}</p>
                        </div>
                        )
                        })}

        </div>
    
            <ReactPaginate 
                previousLabel = {'prev'}
                nextLabel = {'next'}
                breakLabel = {'...'}
                pageCount = {10}
                marginPageDisplayed={4}
                pageRangeDisplayed = {2}
                onPageChange={handlePageClick}
                containerClassName={'pagination__wrap-links'}
                pageClassName={'pagination__link'}
                pageLinkClassName={'pagination__link'}
                previousClassName={'pg-btn pg-prev'}
                previousLinkClassName={'pagination__link'}
                nextClassName={'pg-btn'}
                nextLinkClassName={'pagination__link'}
                breakClassName={'pg-btn'}
                breakLinkClassName={'pagination__link'}
                activeClassName={'pg-active'}
                /> 

    </>
)
}

export default Pagination