import React, { createContext, useContext, useState } from 'react'
import {baseUrl} from '../baseUrl'


export const AppContext = createContext();

function AppContextProvider({children}) {

    const [loading, setLoading] = useState(false);
    const [ page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState();

    async function fetchBlogs(page=1){
        setLoading(true);

        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            console.log(data); 
            setPage(data?.page);
            setPosts(data?.posts);
            setTotalPages(data?.totalPages); 
        }
        catch(e){
            console.log("Error");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }

    function handlePageChange(page) {
        setPage(page);
        fetchBlogs(page);
    }

    const value = {
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        loading,
        setLoading,
        handlePageChange,
        fetchBlogs
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>


}

export default AppContextProvider;