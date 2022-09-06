import "./App.css";
import { SanityProvider } from "./SanityContext";
import Page from "./Page";

function App() {
  return (
    <div className="App">
      <SanityProvider>
        <Page />
      </SanityProvider>
    </div>
  );
}

export default App;
