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
                postHistory(response.data.video, setData)
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

export const postWatchLater = async (video,setData, postToast) => {
    try {
        await axios.post('/api/user/watchlater', {video}, {headers:{authorization: localStorage.getItem("token")}}).then((response) => {
            if(response.status === 200 || response.status === 201) {
                getWatchLater(setData);
                postToast("success", "added to watch later");
            }
        });
    } catch (error) {
        console.log(error)
        if(error.response.status === 409) {
            postToast("warning", "video already in watch later");
        }
        if(error.response.status === 500) {
            postToast("warning", "please sign in ");
        }
    }
};
export const deleteWatchLater =  async (id, setData, postToast) => {
    await axios.delete(`/api/user/watchlater/${id}`, {headers:{authorization: localStorage.getItem("token")}}).then((response) => {
        if(response.status === 200 || response.status === 201) {
            getWatchLater(setData);
            postToast("success", "removed from watch later");
        }
    });
}; 

export const getWatchLater = async (setData) => {
    try {
        await axios.get('/api/user/watchlater', {headers:{authorization: localStorage.getItem("token")}}).then((response) => {
            if(response.status === 200 || response.status === 201)
             setData({type:"WATCH_LATER", watchLater:response.data.watchlater});
           })
    } catch (error) {
        console.log(error);
    }
};

export const postPlaylist = async (e, title, description, setData, postToast, postError) => {
    e.preventDefault()
    if(title !== "" && description !== "") {
        try {
            await axios.post('/api/user/playlists', 
            { playlist: {title: title, description:description }},
            {headers: {authorization: localStorage.getItem('token')}}
            ).then((response) => {
                if(response.status === 200 || response.status === 201) {
                    getPlaylist(setData);
                    postToast("success", `created playlist ${title}`);
                    setData({type:"CLEAR_INPUT"})
                }
            })
        } catch (error) {
            if(error.response.status === 500) {
                postToast("warning", "please sign in ");
            }
        };
    } else {
       !description && postError("description", "please fill description");
       !title && postError("title", "please enter your playlist title");
    };
};

export const getPlaylist = async (setData) => {
    try {
        await axios.get('/api/user/playlists', {headers: {authorization: localStorage.getItem('token')}}).then((response) => {
            if(response.status === 200 || response.status === 201) {
                setData({type:"PLAYLIST", playlist: response.data.playlists});
            }  
         });
    } catch (error) {
        console.log(error)
    }
};
export const deletePlaylist  = async (id, setData, postToast) => {
    try {
        await axios.delete(`/api/user/playlists/${id}`,{headers:{authorization: localStorage.getItem("token")}}).then((response) => {
            if(response.status === 200 || response.status === 201) {
                getPlaylist(setData);
                postToast("success", "playlist removed");
            }
        });
    } catch (error) {
        console.log(error);
    }
};



export const postPlaylistVideo = async (playlistId, video, postToast) => {
    try {
        await axios.post(`/api/user/playlists/${playlistId}` , {video}, {headers: {authorization: localStorage.getItem("token")}}).then((response) => {
            if(response.status === 200 || response.status === 201) {
                postToast("success", `video added to playlist`);
            }
        })
    } catch (error) {
        if(error.response.status === 409) {
            postToast("warning", `video is already in playlist`);
        }
        if(error.response.status === 500) {
            postToast("warning", "please sign in ");
        }
    }
};

export const getPlaylistVideo = async (playlistId, setData) => {
    try {
        await axios.get(`/api/user/playlists/${playlistId}` ,  {headers: {authorization: localStorage.getItem("token")}}).then((res) => {
            setData({type:"POST_VIDEO", playlistVideo: res.data.playlist.videos});
        })
    } catch (error) {
        console.log(error)
    }
  
};

export const deletePlaylistVideo = async ( videoId ,setData, postToast,playlistId) => {
    try {
        await axios.delete(`/api/user/playlists/${playlistId}/${videoId}` ,  {headers: {authorization: localStorage.getItem("token")}}).then((response) => {
            if(response.status === 200 || response.status === 201) {
                getPlaylistVideo(playlistId,setData);
                postToast("success", `video deleted from playlist`);
            }
        })
    } catch (error) {
        console.log(error)
    }
};


export const postHistory = async (video, setData) => {
    try {
        await axios.post(`/api/user/history/`, {video}, {headers: {authorization: localStorage.getItem("token")}}).then((response) => {
            if(response.status === 201) {
           getHistory(setData);
            }
        })
    } catch (error) {
        console.log(error);
    }
};
   
    

export const getHistory = async (setData) => {
    try {
        await axios.get('/api/user/history/',  {headers: {authorization: localStorage.getItem("token")}}).then((response) => {
            setData({type:"HISTORY", history:response.data.history})
        })
    } catch (error) {
        console.log(error)
    }
};

export const deleteHistory  = async (id, setData, postToast) => {
    try {
        await axios.delete(`/api/user/history/${id}`, {headers: {authorization: localStorage.getItem("token")}}).then((response) => {
            if(response.status === 200 || response.status === 201) {
                getHistory(setData);
                postToast("success", `video removed from history`);
            }
            
        })
    } catch (error) {
        console.log(error);
    }
};

export const deleteHistoryAll = async (setData, postToast) => {
    try {
        await axios.delete('/api/user/history/all', {headers: {authorization: localStorage.getItem("token")}}).then((response) => {
            if(response.status === 200 || response.status === 201) {
                getHistory(setData);
                postToast("success", `all video removed from history`);
            }
        })
    } catch (error) {
         console.log(error)
    }
};
