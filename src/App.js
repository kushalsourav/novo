import Main from "./router/Main";
import "./App.css";
import ContextProvider from "./contexts/ContextProvider";

function App() {
  return (
    <div>
      <ContextProvider>
      <Main />
      </ContextProvider>
    </div>
  );
}
export default App;