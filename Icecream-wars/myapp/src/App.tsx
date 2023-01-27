import "./App.css";
import { AdDesigner } from "./components/AdDesigner";
import { Header } from "./components/Header";
import Votes from "./components/Votes";

function App() {
  return (
    <>
    <Header />
    <div className="main">
     <AdDesigner /> 
     <Votes />
    </div>
    
    </>
    
  );
}

export default App;