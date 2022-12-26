import { createContext, useContext, useEffect ,useReducer } from "react";
import { getCategories,getVideos} from "../../apis/Apis";
import DataReducer from "../../reducers/DataReducer/DataReducer";
const initalDataState = {
    categories  : [],
    videos : [],
    accordion : 1,
    search : "",
    video : [],
    toast : {
        toastType: "",
        toastMessage: ""
    },
    liked : [],
    watchLater: [],
    playlistVideo: [],
    playlist: [],
    playlistForm : {
        title: '',
        description: '',
    },
    modal : false,
    history : [],
    filterCategory : {
        filterChecked: '',
        filterCategoryName:'',
    },
}

const DataContext = createContext();
const useData = () => useContext(DataContext);

const DataProvider = ({children}) => {
    const [data , setData] = useReducer(DataReducer, initalDataState);
 
    useEffect(() => {
        // loading category and videos
         getCategories(setData);
          getVideos(setData);
    }, []);
    
    return(
        <>
        <DataContext.Provider value={{setData, data}}>
            {children}
        </DataContext.Provider>
        </>
    )
};
export {DataProvider, useData};