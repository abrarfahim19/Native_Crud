import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blog':
            console.log("added");
            return [...state, {title:`Blog Post ${state.length+1}`}]
        default:
            return state;
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type:"add_blog"})
    }
}

export const {Context, Provider} = createDataContext(blogReducer,{addBlogPost},[]);


// UseState Approach

// import React, { useState } from "react";
// const BlogContext = React.createContext();
// export const BlogProvider = ({children}) => {
//     const [blog, setBlog] = useState([])
//     const addBlog = () => {
//         setBlog([...blog,`Blog Post ${blog.length+1}`])
//     }

//     return(
//         <BlogContext.Provider value={{ blog, addBlog }}>
//             {children}
//         </BlogContext.Provider>
//     );
// };

// export default BlogContext;