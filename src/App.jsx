
import "./App.css"
import  {Routes,Route} from "react-router-dom"
import  HomePage from "./pages/home/index.jsx";
import  Roompage  from "./pages/room/index.jsx";
function App() {
  return (
    
      <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/room/:roomId" element={<Roompage/>}/>
      </Routes>
      </div>
        
    
  )
}

export default App
