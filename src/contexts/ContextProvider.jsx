import { DataProvider } from "./DataContext/DataContext"


const ContextProvider = ({children}) => {
  return (
    <DataProvider>
        {children}
    </DataProvider>
  );
};

export default ContextProvider;