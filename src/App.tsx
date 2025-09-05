import "./assets/styles/App.css";
import AppProvider from "./providers/AppProvider";
import Router from "./routes";

function App() {
  return (
    <AppProvider>
      <Router></Router>
    </AppProvider>
  );
}

export default App;
