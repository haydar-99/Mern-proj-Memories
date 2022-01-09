import * as api from '../api';
// import posts from '../reducers/posts';

//actions creators
 export const getPosts = () =>  async (dispatch) => {
    const action ={ type: 'FETCH_ALL', payload:[]}
    try {
       
        const {data} = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data})
        
    } catch (error) {
        console.log(error.message)
        
    }
    
    dispatch( action);
} 

export const createPost =(post) => async(dispatch) => {
    try {
        const {data} = await api.createPost(post)
        dispatch({type : 'CREATE' , payload: data })
    } catch (error) {
        console.log(error.message)
        
    }
}