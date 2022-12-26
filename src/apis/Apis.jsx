import axios from "axios";


export const getCategories = async (setData) => {
    try {
        await axios.get('/api/categories').then((response) => {
            if(response.status === 200 || response.status === 201) {
               setData({type:"LOAD_CATEGORIES", categories:response.data.categories})
            };
          });
    } catch (error) {
         console.log(error);
    }
}
export const getVideos = async (setData) =>  {
    try {
        await axios.get('/api/videos').then((response) => {
            if(response.status === 200 || response.status === 201) {
                setData({type:"LOAD_VIDEOS", videos:response.data.videos});
            };
          });
    } catch (error) {
         console.log(error);
    }
};
export const getVideo = async (id, setData) => {
    try {
        await axios.get(`/api/video/${id}`).then((response) => {
            if(response.status === 200 || response.status === 201) {
                setData({type:"VIDEO", video:response.data.video})
            };
        });
    } catch (error) {
        console.log(error);
    }
};

export const postUserLikes =  async (video, setData,postToast) => {
    try {
        await axios.post('/api/user/likes', {video}, {headers:{authorization: localStorage.getItem("token")}}).then((response) => {
            if(response.status === 200 || response.status === 201) {
                getUserLikes(setData);
                postToast("success", "added to liked video");
            }
        });
    } catch (error) {
        if(error.response.status === 500) {
            postToast("warning", "please sign in ");
        }
    }
}
export const getUserLikes = async (setData) =>{
    try {
        await axios.get('/api/user/likes', {headers:{authorization: localStorage.getItem("token")}})
        .then((response) => {
            if(response.status === 200 || response.status === 201) {
                setData({type:"LIKED_VIDEO", liked:response.data.likes});
            } 
          });
    } catch (error) {
        console.log(error);
    }
 }

export const deleteUserLikes = async (id, setData, postToast) => {
    try {
        await axios.delete(`/api/user/likes/${id}`,{headers:{authorization: localStorage.getItem("token")}}).then((response) => {
            if(response.status ===200 || response.status === 201) {
                getUserLikes(setData);
                postToast("success", "video removed from liked");
            }
        });
    } catch (error) {
        console.log(error)
    }
};