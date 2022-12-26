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
