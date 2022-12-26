const DataReducer = (state, action) => {
    switch (action.type) {
       case "LOAD_CATEGORIES":
              return {...state, categories:action.categories};
       case "LOAD_VIDEOS":
              return {...state, videos:action.videos};
       case "ACCORDION" :
              return {...state, accordion:state.accordion + Number(action.accordion)};
       case "INPUT" :
              return {...state, [action.name]: action.input,}
       case "VIDEO" : 
              return {...state, video:action.video};
       case "TOAST" :
              return {...state, toast: { ...state.toast , toastType: action.toastType, toastMessage: action.toastMessage}};
       case "LIKED_VIDEO" : 
              return {...state, liked: action.liked};
       default:
              return state;
    } 
};

export default DataReducer;