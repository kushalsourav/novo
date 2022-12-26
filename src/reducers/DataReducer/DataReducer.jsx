const DataReducer = (state, action) => {
    switch (action.type) {
       case "LOAD_CATEGORIES":
              return {...state, categories:action.categories};
       case "LOAD_VIDEOS":
              return {...state, videos:action.videos};
       case "ACCORDION" :
              return {...state, accordion:state.accordion + Number(action.accordion)};
       default:
              return state;
    } 
};

export default DataReducer;