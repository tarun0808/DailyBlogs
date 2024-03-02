import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const PageChange = () => {
    const {page, handlePageChange, totalPages} = useContext(AppContext)
  return (
    <div>
        
        <div className='m-4 p-4'>
            {
                page>1 && 
                <button className='bg-sky-500 text-white rounded-l-md py-2 border-l border-sky-200 hover:bg-white hover:text-black px-3' onClick={ () => handlePageChange(page - 1)}>prev</button>
            }
            {
                page < totalPages &&
                <button className='bg-sky-500 text-white rounded-r-md py-2 border-l border-sky-200 hover:bg-white hover:text-black px-3' onClick={ () => handlePageChange(page +1)}>next</button>
            }
            <p className='m-4 p-4 text-xl font-semibold italic'>page {page} of {totalPages} </p>
        </div>
        
        </div>
  )
}

export default PageChange