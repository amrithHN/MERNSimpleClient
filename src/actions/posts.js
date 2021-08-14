import * as api from "../api/api";

export const fetchPosts = () => async (dispatch) => {
    try {
        let data = await api.getposts();
        //console.log(data)
        let val = { type: 'FETCH_POSTS', payload: data };
        //console.log(val);
        dispatch(val);
    }
    catch (error) {
        console.log(error.message);
    }


}

export const AddPosts = (post) => async (dispatch) => {
    try {

        const { data } = await api.submitPost(post);
        let val = { type: 'ADD_POST', payload: data };
        dispatch(val);
    }
    catch (error) {
        console.log(error.message);
    }


}


export const deletePost = (post) => async (dispatch) => {
    try {

        console.log("hmm: " + post);
        const { data } = await api.deletepost(post);
        let val = { type: 'DELETE_POST', payload: data };
        dispatch(val);
    }
    catch (error) {
        console.log(error.message);
    }


}
