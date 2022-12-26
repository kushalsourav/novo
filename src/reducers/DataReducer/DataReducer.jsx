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
       default:
              return state;
    } 
};

export default DataReducer;