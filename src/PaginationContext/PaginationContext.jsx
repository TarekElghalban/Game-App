
import { createContext, useState } from 'react';










 export let PaginationContext = createContext();
export default function PaginationContextProvider(props){
let [ posts , setPosts] = useState([])
let [loading , setIsLoading] = useState(false)
let [CurrentPage , setCurrentPage] = useState(1)
let [postsPerPage , setPostsPerPage] = useState(20)
let totalPosts = posts.length
let lastIndex = CurrentPage * postsPerPage
let FirstIndex = lastIndex - postsPerPage
let CurrentPosts = posts.slice( FirstIndex ,lastIndex )

return <PaginationContext.Provider value={{}} >
    {props.children}
</PaginationContext.Provider>

}

