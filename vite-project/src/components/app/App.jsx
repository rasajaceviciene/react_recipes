import { Routes, Route } from "react-router-dom"
import Home from "../home/Home"
import Recipe from "../recipe/Recipe"

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/recipes/:id" element={<Recipe/>}/>
    </Routes>   
  )
}

export default App
