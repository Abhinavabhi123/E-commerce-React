import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import UserRoute from "./Routes/UserRoutes/UserRoute"

function App() {
  return(
    <Router>
      <Routes>
      
        <Route path="/" element={<UserRoute/>}/>
      
      </Routes>
    </Router>
  )
}

export default App
